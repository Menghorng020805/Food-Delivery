const Order = require("../models/orderModels");

// ================= CREATE ORDER =================
exports.createOrder = (req, res) => {
  Order.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "Order created successfully",
      order_id: result.insertId
    });
  });
};

// ================= GET ALL ORDERS =================
exports.getOrders = (req, res) => {
  Order.getAll((err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(data);
  });
};

// ================= GET ORDER BY ID =================
exports.getOrderById = (req, res) => {
  const id = req.params.id;

  Order.getById(id, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.json(data[0]);
  });
};

// ================= UPDATE ORDER =================
exports.updateOrder = (req, res) => {
  const id = req.params.id;

  Order.updateById(id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.json({
      message: "Order updated successfully"
    });
  });
};

// ================= DELETE ORDER =================
exports.deleteOrder = (req, res) => {
  const id = req.params.id;

  Order.deleteById(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.json({
      message: "Order deleted successfully"
    });
  });
};

exports.createOrderItem = (req, res) => {
  //  Get data from Postman
  const { menu_id, price, quantity } = req.body;

  //  Calculate total price
  const total_price = price * quantity;

  //  SQL insert
  const sql = `
    INSERT INTO order_items (menu_id, price, quantity, total_price)
    VALUES (?, ?, ?, ?)
  `;

  //  Run query
  db.query(sql, [menu_id, price, quantity, total_price], (err, result) => {
    if (err) return res.status(500).json(err);

    //  Send result to Postman
    res.json({
      message: "Order created",
      price,
      quantity,
      total_price
    });
  });
};
