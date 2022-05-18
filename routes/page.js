const BaseController = require("./");
const model = new (require("../models/content"))();
const View = new (require("../views/base"))();
module.exports = class HomeController extends BaseController {
  constructor() {
    super("Home");
    this.content = null;
  }
  run(type, req, res, next) {
    model.setDB(req.db);
    const self = this;
    this.getContent(type, function () {
      const v = new View(res, "inner");
      v.render(self.content);
    });
  }
  getContent(type, callback) {
    const self = this;
    this.content = {};
    model.getlist(
      function (err, records) {
        if (records.length > 0) {
          self.content = records[0];
        }
        callback();
      },
      { type: type }
    );
  }
};
