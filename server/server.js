const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "QuickByte API is running"
  });
});

app.listen(PORT, () => {
  console.log(`QuickByte API running at http://localhost:${PORT}`);
});