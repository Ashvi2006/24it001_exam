
const express = require("express");
const router = express.Router();
const authGuard = require("../middleware/authGuard");

let foods = [
  {
    id: 1,
    name: "Classic Burger",
    price: 149,
    category: "Burger"
  },
  {
    id: 2,
    name: "Veg Pizza",
    price: 199,
    category: "Pizza"
  },
  {
    id: 3,
    name: "Cold Coffee",
    price: 99,
    category: "Drinks"
  }
];

let nextId = 4;

// 1. GET all foods
router.get("/foods", (req, res) => {
  res.status(200).json({
    success: true,
    count: foods.length,
    data: foods
  });
});

// 2. GET food by ID
router.get("/foods/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      success: false,
      message: "Invalid food ID"
    });
  }

  const food = foods.find((item) => item.id === id);

  if (!food) {
    return res.status(404).json({
      success: false,
      message: "Food not found"
    });
  }

  res.status(200).json({
    success: true,
    data: food
  });
});

// 3. CREATE food
router.post("/foods", authGuard, (req, res) => {
  const { name, price, category } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof category !== "string" ||
    !category.trim() ||
    price === "" ||
    price === null ||
    price === undefined ||
    !Number.isFinite(Number(price)) ||
    Number(price) <= 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Valid name, category and positive price are required"
    });
  }

  const food = {
    id: nextId++,
    name: name.trim(),
    price: Number(price),
    category: category.trim()
  };

  foods.push(food);

  res.status(201).json({
    success: true,
    message: "Food created successfully",
    data: food
  });
});

// 4. UPDATE food
router.put("/foods/:id", authGuard, (req, res) => {
  const id = Number(req.params.id);
  const food = foods.find((item) => item.id === id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      success: false,
      message: "Invalid food ID"
    });
  }

  if (!food) {
    return res.status(404).json({
      success: false,
      message: "Food not found"
    });
  }

  const { name, price, category } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof category !== "string" ||
    !category.trim() ||
    price === "" ||
    price === null ||
    price === undefined ||
    !Number.isFinite(Number(price)) ||
    Number(price) <= 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Valid name, category and positive price are required"
    });
  }

  food.name = name.trim();
  food.price = Number(price);
  food.category = category.trim();

  res.status(200).json({
    success: true,
    message: "Food updated successfully",
    data: food
  });
});

// 5. DELETE food
router.delete("/foods/:id", authGuard, (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      success: false,
      message: "Invalid food ID"
    });
  }

  const index = foods.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Food not found"
    });
  }

  foods.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Food deleted successfully"
  });
});

module.exports = router;
