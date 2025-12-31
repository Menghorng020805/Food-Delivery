const db = require("../config/db");

exports.create = (data, cb) => {
  db.query("INSERT INTO orders SET ?", data, cb);
};

exports.getAll = (cb) => {
  db.query("SELECT * FROM orders", cb);
};

// get by ID
exports.getById = (id, cb) => {
  db.query("SELECT * FROM orders WHERE id = ?", [id], cb);
};

exports.updateById = (id, data, cb) => {
  db.query("UPDATE orders SET ? WHERE id = ?", [data, id], cb);
};

exports.deleteById = (id, cb) => {
  db.query("DELETE FROM orders WHERE id = ?", [id], cb);
};
