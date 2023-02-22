import Fastify from "fastify";

function app() {
  const fastify = Fastify();

  fastify.get("/todos", async () => {});
  fastify.post(
    "/todos",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            name: { type: "string" },
          },
          required: ["name"],
        },
        response: {
          201: {
            description: "Success Response",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    async (_, reply) => reply.status(201).send({ message: "created" })
  );

  return fastify;
}

export default app;
