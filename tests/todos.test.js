import test from "node:test";
import assert from "node:assert";
import buildApp from "../index.js";

test("GET /todos returns status 200", async (t) => {
  const app = await buildApp();

  const res = await app.inject({
    url: "/todos",
  });

  assert.deepStrictEqual(res.statusCode, 200);

  t.after(async () => {
    await app.close();
  });
});