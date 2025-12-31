const Menu = require("../models/menuModels");

// CREATE MENU
exports.createMenu = (req, res) => {
  Menu.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Menu created", id: result.insertId });
  });
};

// GET ALL MENUS
exports.getAllMenu = (req, res) => {
  Menu.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// GET MENU BY ID
exports.getMenuById = (req, res) => {
  Menu.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

// UPDATE MENU
exports.updateMenu = (req, res) => {
  Menu.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Menu updated" });
  });
};

// DELETE MENU
exports.deleteMenu = (req, res) => {
  Menu.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Menu deleted" });
  });
};

