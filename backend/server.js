const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "mysecret";

// Register
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users(name,email,password) VALUES($1,$2,$3)",
    [name, email, hashed]
  );

  res.json({ message: "User registered successfully" });
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  if (user.rows.length === 0)
    return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.rows[0].password);

  if (!valid)
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.rows[0].id }, SECRET);

  res.json({ token });
});

// Add to Cart
app.post("/cart", async (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  await pool.query(
    "INSERT INTO cart(user_id,product_id,quantity) VALUES($1,$2,$3)",
    [user_id, product_id, quantity]
  );

  res.json({ message: "Added to cart" });
});

// Checkout
app.post("/checkout", async (req, res) => {
  const { user_id, total_amount } = req.body;

  await pool.query(
    "INSERT INTO orders(user_id,total_amount,payment_status) VALUES($1,$2,$3)",
    [user_id, total_amount, "Paid"]
  );

  res.json({ message: "Order placed successfully" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));