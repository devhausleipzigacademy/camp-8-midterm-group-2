import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors";
import models from "./models";
// import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";
// import fastify from "fastify";
// import _ from "lodash";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";
import dotenv from "dotenv";
import { TokenResponse } from "../src/stores/AuthStore"

dotenv.config();

const secretKey = process.env["SECRET_KEY"];

export const prisma = new PrismaClient();

async function init() {
  // const { schemas, $ref } = buildJsonSchemas(models);

  // Require the framework and instantiate it
  const fastify = Fastify({ logger: true });

  fastify.register(cors, { origin: ["*"] });

  //TEST:
  // fastify.get("/hello", async (request, reply) => {
  //   reply.send("hello");
  // });

  // fastify.post("/auth/register", async (request, reply) => {
  //   try {
  //   const userData = await models.asyncPostUserBodyModel.parseAsync(request.body);

  //   const user = await prisma.user.create({
  //     data: {..._.omit(userData,["password"]),
  //   saltAndHash: await bcrypt.hash(userData.password, 10)}
  //   })
  //   reply.status(201)
  // } catch (error) {
  //   if (error instanceof ZodError) {
  //     reply.status(422).send(JSON.stringify(error));
  //   }
  //   console.log(error)
  //   reply.status(500).send("Soomething went wrong!")
  // }
  // })

  //LOG
  fastify.post("/auth/login", async (request, reply) => {
    try {

      //bind login-Data from Request
      const loginData = models.postTokenBodyModel.parse(request.body); //making it fit the model?

      //find user with a fitting email
      const currentUser = await prisma.user.findUnique({
        where: { email: loginData.email }, //has to match the columns in prisma
      });

      //return an Error if no match or no user registered --> how to use it for setError in Login.tsx?
      if (!currentUser) {
        reply.status(401).send("Either email or password are wrong.");
        return;
      }

      //compare login password to DB-entry
      //https://github.com/kelektiv/node.bcrypt.js
      //did we define rules for salt and hash anywhere?
      const match = await bcrypt.compare(loginData.password, currentUser.saltAndHash);

      if (match) {const token: TokenResponse = jwt.sign(
        {
          user_id: currentUser.identifier,
          user_email: currentUser.email,
        } as TokenResponse,
        secretKey!,
        { expiresIn: "24h" }
      );
      return token}

    } catch (error) {
      if (error instanceof ZodError) {
        reply.status(422).send(JSON.stringify(error));
        return;
      }
      if (
        error instanceof jwt.JsonWebTokenError ||
        error instanceof jwt.NotBeforeError ||
        error instanceof jwt.NotBeforeError
      ) {
        console.log(error);
        reply.status(401).send("Either email or password is wrong.");
        return;
      }
    }
  });
  //what does this do?
  await fastify.listen({ port: 3000, host: "127.0.0.1" });
}
try {
  init();
} catch (err) {
  // fastify.log.error(err);
  process.exit(1);
}
