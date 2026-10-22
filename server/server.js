
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample food data
let foods = [
  { id: 1, name: "Burger", price: 120, category: "Fast Food" },
  { id: 2, name: "Pizza", price: 250, category: "Fast Food" },
  { id: 3, name: "Sandwich", price: 100, category: "Snacks" }
];

// Request logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// GET: All foods
app.get("/api/v1/foods", (req, res) => {
  res.json(foods);
});

// GET: Food by ID
app.get("/api/v1/foods/:id", (req, res) => {
  const food = foods.find(f => f.id === Number(req.params.id));

  if (!food) {
    return res.status(404).json({ message: "Food not found" });
  }

  res.json(food);
});

// POST: Add food
app.post("/api/v1/foods", (req, res) => {
  const { name, price, category } = req.body;

  if (!name || price == null || !category) {
    return res.status(400).json({
      message: "Name, price and category are required"
    });
  }

  const newFood = {
    id: foods.length ? Math.max(...foods.map(f => f.id)) + 1 : 1,
    name,
    price: Number(price),
    category
  };

  foods.push(newFood);
  res.status(201).json(newFood);
});

// PUT: Update food
app.put("/api/v1/foods/:id", (req, res) => {
  const food = foods.find(f => f.id === Number(req.params.id));

  if (!food) {
    return res.status(404).json({ message: "Food not found" });
  }

  const { name, price, category } = req.body;

  if (name !== undefined) food.name = name;
  if (price !== undefined) food.price = Number(price);
  if (category !== undefined) food.category = category;

  res.json(food);
});

// DELETE: Remove food
app.delete("/api/v1/foods/:id", (req, res) => {
  const index = foods.findIndex(f => f.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Food not found" });
  }

  const deletedFood = foods.splice(index, 1)[0];
  res.json({
    message: "Food deleted successfully",
    food: deletedFood
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`QuickByte API running at http://localhost:${PORT}`);
});
