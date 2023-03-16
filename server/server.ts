import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors"; //to allow replies by an origin different from the request-origin
import models from "./models";
// import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";
import _ from "lodash";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";

import dotenv, { config } from "dotenv";
import { TokenResponse } from "../src/stores/AuthStore";

dotenv.config();
export const prisma = new PrismaClient();
const secretKey = process.env["SECRET_KEY"];

//node reads init() /server.ts)
//node executes `export const prisma = new PrismaClient()` too

//Prisma setup defines where the function will look up the DB (Enrviornment file)
async function init() {

  // const { schemas, $ref } = buildJsonSchemas(models);

  // Require the framework and instantiate it
  const fastify = Fastify({ logger: true });
  await fastify.register(cors, {
  // put your options here
})

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
    "/auth/login",
    { config: { Headers: { "Content-Type": "application/json" } } }, //what is this for again, Ned?
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
          reply.status(202).send({user, token}); // mehrere values in Object packen (calides JSON, alles im Array, oder alles ins Object), <---- shorthand für user:user, token:token
        }

        //How to use it for setError in Login.tsx?
        else {reply.status(401).send("Either email or password are wrong.")}
      }

      } catch (error) {
        console.log(Error)
        reply.send(error)
      }
    }
  );
  //what does this do?
  await fastify.listen({ port: 3000,  });
}
try {
  init();
} catch (err) {
  //produced Error:
  // Fastify.log.error(err);
  process.exit(1);
}