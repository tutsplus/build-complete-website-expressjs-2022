module.exports = class BaseModel {
  constructor(db) {
    this.setDB(db);
  }
  setDB(db) {
    this.db = db;
  }
  collection() {
    if (this._collection) return this._collection;
    return (this._collection = this.db.collection("fastdelivery-content"));
  }
};
