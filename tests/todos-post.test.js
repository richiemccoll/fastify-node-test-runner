import { describe, it, before, after } from "node:test";
import assert from "assert";
import buildApp from "../index.js";

describe("POST /todos", async () => {
  let app;

  before(async () => {
    app = await buildApp();
  });

  after(async () => {
    await app.close();
    app = null;
  });

  it("should return 400 when no name is present on the payload", async () => {
    const res = await app.inject({
      url: "/todos",
      method: "POST",
      payload: {},
    });

    assert.deepStrictEqual(res?.statusCode, 400);
    assert.deepStrictEqual(
      JSON.parse(res?.body).message,
      "body must have required property 'name'"
    );
  });

  it("should return 201 when the payload is valid", async () => {
    const res = await app.inject({
      url: "/todos",
      method: "POST",
      payload: {
        name: "do the thing",
      },
    });

    assert.deepStrictEqual(res?.statusCode, 201);
    assert.deepStrictEqual(JSON.parse(res?.body).message, "created");
  });
});
