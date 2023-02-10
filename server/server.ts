import { PrismaClient, unauthorizedUser, User } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors";
import models from "./models";
import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";
import _ from "lodash";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";

import dotenv, { config } from "dotenv";
import { TokenResponse } from "../src/stores/AuthStore";

dotenv.config();

const secretKey = process.env["SECRET_KEY"];

export const prisma = new PrismaClient();

//node reads init() /server.ts)
//node executes `export const prisma = new PrismaClient()` too


//Prisma setup defines where the function will look up the DB (Enrviornment file)
async function init() {
  // const { schemas, $ref } = buildJsonSchemas(models);

  // Require the framework and instantiate it
  const fastify = Fastify({ logger: true });

  fastify.register(cors, { origin: ["*"] });

  //TEST:
  // fastify.get("/hello", async (request, reply) => {
  //   reply.send("hello");
  // });

  //Zwischenspeicher
  let currentUser: unauthorizedUser = {
    // identifier: null,
    email: null,
    // name: null,
    // password: null,
    saltAndHash: null,
  }

  //Zwischenspeicher
  let match = false

  fastify.post("/auth/register", async (request, reply) => {
    try {
      const newUserData = await models.newUserBodyModel.parseAsync(
        request.body
      );

      //WHERE IS ZOD HERE
      const newUser = await prisma.user.create({
        data: {
          ..._.omit(newUserData, ["password"]),
          saltAndHash: await bcrypt.hash(newUserData.password, 10),
        },
      });
      reply.status(201);
    } catch (error) {
      if (error instanceof ZodError) {
        reply.status(422).send(JSON.stringify(error));
      }
      console.log(error);
      reply.status(500).send("Soomething went wrong!");
    }
  });

  //LOG-IN
  fastify.post(
    "/login",
    { config: { Headers: { "Content-Type": "application/json" } } },
    async (request, reply) => {

      try {
        //bind login-Data from Request
        const loginData = models.postTokenBodyModel.parse(request.body); //making it fit the model

        //find user with a fitting email
        const user = await prisma.user.findUnique({
          where: { email: loginData.email }, //has to match the columns in prisma
          select: {
            identifier: true,
            email: true,
            saltAndHash: true
          }, //takes only specific columns and values
        });

        if (user) {

        // reply.send("HEEEY user found, checking saltAndHash");

        //bcrypt compare login password to DB-entry
        //https://github.com/kelektiv/node.bcrypt.js
        //did we define rules for salt and hash anywhere?
        match = await bcrypt.compare(
          loginData.password,
          user.saltAndHash
        );

        if (match === true) {
          const token = jwt.sign(
            {
              user_id: user.identifier,
              user_email: user.email,
            } as TokenResponse,
            secretKey!, //what is this?
            { expiresIn: "24h" }
          );

          return token;
        }

        //How to use it for setError in Login.tsx?
        else {reply.status(401).send("Either email or password are wrong.")}
      }


      } catch (error) {
        // if (error instanceof ZodError) {
        //   reply.status(422).send(JSON.stringify(error));
        //   return;
        // }
        // if (
        //   error instanceof jwt.JsonWebTokenError ||
        //   error instanceof jwt.NotBeforeError ||
        //   error instanceof jwt.NotBeforeError
        // ) {
        //   console.log(error);
        //   reply.status(401).send("Either email or password is wrong.");
        //   return;
        // }
      }
    }
  );
  //what does this do?
  await fastify.listen({ port: 3000 });
}
try {
  init();
} catch (err) {
  // fastify.log.error(err);
  process.exit(1);
}
