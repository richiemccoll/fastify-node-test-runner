import Fastify from "fastify";

function app() {
  const fastify = Fastify();

  fastify.get("/todos", async (_, reply) => reply.send({}));

  return fastify;
}

export default app;
