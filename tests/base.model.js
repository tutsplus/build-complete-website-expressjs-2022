const { test } = require("uvu");
const assert = require("uvu/assert");
const ModelClass = require("../models/base");
const dbMockup = {};
test("Module creation", async function () {
  const model = new ModelClass(dbMockup);
  assert.ok(model.db);
  assert.ok(model.setDB);
  assert.ok(model.collection);
});
test.run();
