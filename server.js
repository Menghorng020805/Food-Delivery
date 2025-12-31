require("dotenv").config();
const express = require("express");
const app = express();

// ✅ 1️⃣ Middleware FIRST
app.use(express.json());

// ✅ 2️⃣ Routes AFTER middleware
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
app.use("/api/orders", require("./routes/orderRoutes"));

const restaurantRoutes = require("./routes/restaurantRoutes");
app.use("/api/restaurants", restaurantRoutes);

app.use("/api/menus", require("./routes/menuRoutes"));

// ✅ 3️⃣ Server LAST
app.listen(3000, () => {
  console.log(" Server running on port 3000");
});
