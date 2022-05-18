const { test } = require("uvu");
const { MongoClient } = require("mongodb");

test("MongoDB server active", async function () {
  const client = new MongoClient("mongodb://127.0.0.1:27017/fastdelivery");
  await client.connect();
});

test.run();
