const { test } = require("uvu");
const assert = require("uvu/assert");

test("Local configuration loading", function () {
  const config = require("../config")();
  assert.is(config.mode, "local");
});
test("Staging configuration loading", function () {
  const config = require("../config")("staging");
  assert.is(config.mode, "staging");
});
test("Production configuration loading", function () {
  const config = require("../config")("production");
  assert.is(config.mode, "production");
});
test.run();
