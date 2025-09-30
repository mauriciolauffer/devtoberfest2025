const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("simple node test", () => {
  it("should be ok", async () => {
    assert.ok(true);
  });
});
