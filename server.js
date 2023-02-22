import app from "./index.js";

const config = {
  port: 4000,
};
const fastify = app();

await fastify.listen({ port: config.port });