const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cafe Espresso Emporium");
});

app.listen(port, () => {
    console.log(`port is: ${port}`);
})