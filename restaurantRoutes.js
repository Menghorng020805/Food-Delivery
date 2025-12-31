const router = require("express").Router();
const c = require("../controllers/restaurantController");

router.post("/", c.createRestaurant);
router.get("/", c.getRestaurants);
router.put("/:id", c.updateRestaurant);
router.delete("/:id", c.deleteRestaurant);  
const restaurantController = require("../controllers/restaurantController");

router.get("/:id", restaurantController.getRestaurantById);

module.exports = router;