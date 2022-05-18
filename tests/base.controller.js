const { test } = require("uvu");
const assert = require("uvu/assert");

const ControllerClass = require("../routes/base");

test("Children creation", function () {
  class ChildClass extends ControllerClass {
    constructor() {
      super("my child controller");
    }
  }
  const child = new ChildClass();
  assert.ok(child.run);
  assert.equal(child.name, "my child controller");
});

test("Children differentiation", function () {
  class ChildAClass extends ControllerClass {
    constructor() {
      super("child A");
    }
    customProperty = "value";
  }
  class ChildBClass extends ControllerClass {
    constructor() {
      super("child B");
    }
  }
  const childA = new ChildAClass();
  const childB = new ChildBClass();
  assert.is.not(childA.name, childB.name);
  assert.not(childB.customProperty);
});

test.run();
