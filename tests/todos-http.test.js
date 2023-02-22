import { describe, it, before, after } from "node:test";
import assert from "assert";
import buildApp from "../index.js";

describe("GET /todos HTTP", () => {
  let app;
  let port;

  before(async () => {
    app = await buildApp();
    await app.listen();
    port = app.server.address().port;
  });

  after(async () => {
    await app.close();
  });

  it("GET /todos returns status 200", async () => {
    const response = await fetch(`http://localhost:${port}/todos`);
    assert.deepStrictEqual(response.status, 200);
  });
});
