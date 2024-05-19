require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");

const app = express();

app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
