const db = require("../config/db");

module.exports = {
  getAll: (cb) => db.query("SELECT * FROM menus", cb),

  getById: (id, cb) =>
    db.query("SELECT * FROM menus WHERE id = ?", [id], cb),

  create: (data, cb) =>
    db.query("INSERT INTO menus SET ?", data, cb),

  update: (id, data, cb) =>
    db.query("UPDATE menus SET ? WHERE id = ?", [data, id], cb),

  delete: (id, cb) =>
    db.query("DELETE FROM menus WHERE id = ?", [id], cb),
};
