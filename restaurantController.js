const Restaurant = require('../models/restaurantModels');
exports.createRestaurant = (req, res) => {
  Restaurant.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Restaurant Added" });
  });
};

exports.getRestaurants = (req, res) => {
  Restaurant.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getRestaurantById = (req, res) => {
  Restaurant.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};
exports.updateRestaurant = (req, res) => {
  const id = req.params.id;
  Restaurant.updateById(id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    } ;
    res.json({ message: "Restaurant Updated" });
  });
};  
exports.deleteRestaurant = (req, res) => {
  const id = req.params.id; 
  Restaurant.deleteById(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    } ;
    res.json({ message: "Restaurant Deleted" });
  });
};