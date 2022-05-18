const BaseController = require("./");
const model = new (require("../models/content"))();
module.exports = class HomeController extends BaseController {
  constructor() {
    super("Home");
    this.content = null;
  }
  run(req, res, next) {
    model.setDB(req.db);
    const self = this;
    this.getContent(function () {
      const v = new View(res, "home");
      v.render(self.content);
    });
  }
  getContent(callback) {
    const self = this;
    this.content = {};
    model.getlist(
      function (err, records) {
        // ... storing data to content object
        model.getlist(
          function (err, records) {
            // ... storing data to content object
            callback();
          },
          { type: "blog" }
        );
      },
      { type: "home" }
    );
  }
};
