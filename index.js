// const morgan = require("morgan");
const express = require("express");
const app = express();
app.use(express.json());

// app.use(morgan.token)
const router = require("./routes/index");
app.use("/api", router);

app.get("/", (req, res) => {
  res.json("Server running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
🚀 Server ready at: http://localhost:5000`);
});
