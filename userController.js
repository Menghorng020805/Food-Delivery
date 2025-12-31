const User = require('../models/userModel');

// Get all users
exports.getUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Get user by ID
exports.getUserById = (req, res) => {
  User.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

// Create user
exports.createUser = (req, res) => {
  User.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User created', id: result.insertId });
  });
};

// Update user
exports.updateUser = (req, res) => {
  User.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User updated' });
  });
};

// Delete user
exports.deleteUser = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User deleted' });
  });
};
