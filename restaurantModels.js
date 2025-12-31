const db = require('../config/db');

exports.create = (data, cb) => {
  db.query('INSERT INTO restaurants SET ?', data, cb);
};

exports.getAll = (cb) => {
  db.query('SELECT * FROM restaurants', cb);

};
exports.getById = (id, cb) => {
  db.query('SELECT * FROM restaurants WHERE id = ?', [id], cb);
};
exports.updateById = (id, data, cb) => {
  db.query('UPDATE restaurants SET ? WHERE id = ?', [data, id], cb);
};

exports.deleteById = (id, cb) => {
  db.query('DELETE FROM restaurants WHERE id = ?', [id], cb);
};  