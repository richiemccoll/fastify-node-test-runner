import app from "./index.js";

const fastify = app();

await fastify.listen({ port: config.port });