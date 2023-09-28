const express = require("express");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// middleware
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send('<h1>StoreAPI</h1><a href="/api/v1/products">Products route</a>');
});

app.use("/api/v1/products", productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
