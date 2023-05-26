const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const authroute = require("./routes/auth");
const userroute = require("./routes/user");
const productsroute = require("./routes/product");
const cartsroute = require("./routes/cart");
const ordersroute = require("./routes/order");
const stiperoute = require("./routes/stripe");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("dbconnection is successfull"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authroute);
app.use("/api/users", userroute);
app.use("/api/products", productsroute);
app.use("/api/carts", cartsroute);
app.use("/api/orders", ordersroute);
app.use("/api/checkout", stiperoute);

app.listen(process.env.PORT, function () {
  console.log("Server Tuned on port 3000");
});
