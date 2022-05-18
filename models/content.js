const Base = require("./base"),
  crypto = require("node:crypto");
module.exports = class ContentModel extends Base {
  constructor(db) {
    super(db);
  }
  insert(data, callback) {
    data.ID = crypto.randomBytes(20).toString("hex");
    this.collection().insert(data, {}, callback || function () {});
  }
  update(data, callback) {
    this.collection().update(
      { ID: data.ID },
      data,
      {},
      callback || function () {}
    );
  }
  getlist(callback, query) {
    this.collection()
      .find(query || {})
      .toArray(callback);
  }
  remove(ID, callback) {
    this.collection().findAndModify(
      { ID: ID },
      [],
      {},
      { remove: true },
      callback
    );
  }
};
