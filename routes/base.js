module.exports = class BaseController {
  constructor(name) {
    this.name = name;
  }
  run(req, res, next) {}
};
