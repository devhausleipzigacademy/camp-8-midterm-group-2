import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors";
import models from "./models";
import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";
import fastify from "fastify";
import _ from "lodash";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";

import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env["SECRET_KEY"];

type TokenPayload = {
  user_id: string;
  email: string;
};

export const prisma = new PrismaClient();

async function init() {
  // const { schemas, $ref } = buildJsonSchemas(models);

  // Require the framework and instantiate it
  const fastify = Fastify({ logger: true });

  fastify.register(cors, { origin: ["*"] });

  fastify.get("/hello", async (request, reply) => {
    reply.send("hello");
  });
  fastify.post("/auth/register", async (request, reply) => {
    try {
      const userData = await models.asyncPostUserBodyModel.parseAsync(
        request.body
      );

      const user = await prisma.user.create({
        data: {
          ..._.omit(userData, ["password"]),
          saltAndHash: await bcrypt.hash(userData.password, 10),
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

  fastify.get("/auth/login", async (request, reply) => {
    try {
      const userData = models.postTokenBodyModel.parse(request.body);

      const user = await prisma.user.findUnique({
        where: { email: userData.email },
      });
      if (!user) {
        reply.status(401).send("Either email or password is wrong.");
        return;
      }

      await bcrypt.compare(userData.password, user.saltAndHash);

      const token = jwt.sign(
        {
          user_id: user.identifier,
          email: user.email,
        } as TokenPayload,
        secretKey!,
        { expiresIn: "24h" }
      );

      return token;
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

  // fastify.get(
  //   "/movie/:movieId/showings",
  //   {
  //       operationId:
  //       querystring: $ref(`showingQueryModel`),
  //       params: $ref(`showingParamsModel`),
  //       reply:
  //   },
  //   async (request, reply: any) => {
  //     const { movieId } = models.showingParamModel.parse(request.params);
  //     const { dateTime } = models.showingParamModel.parse(request.query);

  //     if (!Boolean(dateTime)) {
  //       return await prisma.showing.findMany({
  //         where: {
  //           movieId: movieId,
  //           include: {
  //             seats: true,
  //           },
  //         },
  //       });
  //     } else {
  //       return prisma.showing.findUnique({
  //         where: {
  //           movieId_dateTime: {
  //             movieId,
  //             dateTime,
  //           },
  //         },
  //       });
  //       if (!Boolean(showing)) {
  //         reply.status(404).send("Showing does not exist");
  //         return;
  //       }
  //       return showing;
  //     }

  //     return pokemon.map((pokemon: any) => {
  //       return pokemon.name;
  //     });
  //   }
  // );

  // fastify.zod.patch(
  //   "movie/:movieId/showing/:datetime",
  //   { operationId: "bookedSeatsInShowing",
  //     params: "patchShowingParamsModel",
  //     body: "updateShowingBodyModel"
  // },
  //   //@ts-ignore
  //   async (request) => {
  //     try {
  //     const {movieId} = models.patchShowingParamsModel(request.params)
  //     const { showingId, datetime } = models.updateShowingModel.parse(request.query)  ;
  //     const seatIds = request.body

  //     const exampleUserId = "7dee16a9-79aa-4a46-a923-65e62ad59665";

  //     prisma.seat.updateMany({

  //         where: {
  //           seatIn { AND: [{ datetime: new Date(datetime) }, { movieId }]}
  //           OR: seatIds.map((seatId) => {
  //             return { identifier: seatId};
  //           })
  //         },
  //         data: {
  //           userId: exampleUserId
  //         }
  //       })
  //     } catch (error) {
  //       if( error instanceof ZodError ) {
  //       reply.status(422).send(error)
  //       return}
  //     }
  //     console.log(error)
  //     reply.status(500.send(error))
  //     }
  //     }
  // );

  // fastify.patch("/user/:userId", async (request, reply) => {
  //   const { userId } = request.params;
  //  })

  //  fastify.patch("/user/:userId/liked", async (request, reply) => {
  //   const { userId } = models.patchUserParamsModel.parse(request.params);
  //   const likedMovieIds = models.patchUserBodyModel.parse(request.body);

  //   const user = await prisma.user.findUnique({
  //     where: {
  //       identifier: userId
  //     }
  //   })

  // if (!user) {
  //   reply.status(404).send("User cannot be found.")
  //   return
  // }

  // const alreadyThere = changeMovieIds.filter((movieId) => {
  //   return Boolean(user.liked.find((id) => id == movieId))
  // })

  // const NotAlreadyThere = changeMovieIds.filter((movieId) => {
  //   return !Boolean(alreadyThere.find((id) => id == movieId))
  // })

  //   await prisma.user.update({
  //     where: {
  //       identifier: userId
  //     },
  //     data: {
  //       liked: likedMovieIds
  //     }
  //   })
  //  })

  await fastify.listen({ port: 3000, host: "127.0.0.1" });
}
try {
  init();
} catch (err) {
  // fastify.log.error(err);
  process.exit(1);
}
