const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

function getRandomInRange(min, max) {
  return +(Math.random() * (max - min) + min).toFixed(1);
}

app.get("/api/box-status", (req, res) => {
  const temperature = getRandomInRange(15, 35);
  const distance = getRandomInRange(3, 40);
  const doorState = distance < 15 ? "OPEN" : "CLOSED";

  res.json({
    temperature,
    distance,
    doorState,
    lastUpdated: new Date().toISOString(),
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Smart Delivery Box API running on port 4000`);
});