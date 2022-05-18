const { test } = require("uvu");
const assert = require("uvu/assert");

const ViewClass = require("../views/base");

test("View creation and rendering", function () {
  let responseMockup = {
    render: function (template, data) {
      assert.is(data.myProperty, "value");
      assert.is(template, "template-file");
    },
  };
  let view = new ViewClass(responseMockup, "template-file");
  view.render({ myProperty: "value" });
});

test.run();
