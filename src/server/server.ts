import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { models } from "./models";
import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";

// Global augmentation, as suggested by
// https://www.fastify.io/docs/latest/Reference/TypeScript/#creating-a-typescript-fastify-plugin
declare module "fastify" {
  interface FastifyInstance {
    readonly zod: FastifyZod<typeof models>;
  }
}

const prisma = new PrismaClient();

async function init() {
  const { schemas, $ref } = buildJsonSchemas(models);

  // Require the framework and instantiate it
  const fastify = await register(Fastify({ logger: true }), {
    jsonSchemas: { schemas, $ref },
  });

  fastify.register(cors, { origin: ["*"] });

  fastify.get(
    "/movie/:movieId/showings",
    {
      schema: {
        querystring: $ref(`showingQueryModel`),
        params: $ref(`showingParamsModel`),
      },
    },
    async (request, reply) => {
      const { movieId } = request.params as { movieId: string };
      const { dateTime } = request.query as { dateTime: string };

      if (!Boolean(dateTime)) {
        return await prisma.showing.findMany({
          where: {
            movieId: movieId,
          },
        });
      } else {
        return prisma.showing.findUnique({
          where: {
            movieId_dateTime: {
              movieId,
              dateTime,
            },
          },
        });
        if (!Boolean(showing)) {
          reply.status(404).send("Showing does not exist");
          return;
        }
        return showing;
      }

      return pokemon.map((pokemon: any) => {
        return pokemon.name;
      });
    }
  );
}
await fastify.listen({ port: 3000, host: "127.0.0.1" });

try {
  init();
} catch (err) {
  // fastify.log.error(err);
  process.exit(1);
}
