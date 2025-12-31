const db = require("../config/db");

const User = {};

User.getAll = (callback) => {
  db.query("SELECT * FROM users", callback);
};

User.getById = (id, callback) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], callback);
};

User.create = (data, callback) => {
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [data.name, data.email],
    callback
  );
};

User.update = (id, data, callback) => {
  db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [data.name, data.email, id],
    callback
  );
};

User.delete = (id, callback) => {
  db.query("DELETE FROM users WHERE id = ?", [id], callback);
};

module.exports = User;
