const BaseController = require("./base"),
  View = require("../views/base");
module.exports = new (class AdminController extends BaseController {
  constructor() {
    super("Blog");
    this.content = null;
  }
  run(req, res, next) {
    model.setDB(req.db);
    var self = this;
    this.getContent(function () {
      var v = new View(res, "blog");
      v.render(self.content);
    });
  }
  runArticle(req, res, next) {
    model.setDB(req.db);
    var self = this;
    this.getArticle(req.params.id, function () {
      var v = new View(res, "inner");
      v.render(self.content);
    });
  }
  getContent(callback) {
    var self = this;
    this.content = {};
    model.getlist(
      function (err, records) {
        var blogArticles = "";
        if (records.length > 0) {
          for (var i = 0; (record = records[i]); i++) {
            var record = records[i];
            blogArticles +=
              '\
                        <section class="item">\
                            <img src="' +
              record.picture +
              '" alt="" />\
                            <h2>' +
              record.title +
              "</h2>\
                            <p>" +
              record.text +
              '</p>\
                            <br class="clear" />\
                            <hr />\
                        </section>\
                    ';
          }
        }
        self.content.blogArticles = blogArticles;
        callback();
      },
      { type: "blog" }
    );
  }
  getArticle(ID, callback) {
    var self = this;
    this.content = {};
    model.getlist(
      function (err, records) {
        if (records.length > 0) {
          self.content = records[0];
        }
        callback();
      },
      { ID: ID }
    );
    ("/");
  }
})();
