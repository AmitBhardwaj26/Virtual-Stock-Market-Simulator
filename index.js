const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const { errorHandler, notFound } = require("./middleware/error.js");

// SETUP
dotenv.config({ path: "./config/.env" }); // loads environment variables from .env file

app.use(cors()); // allows cross-origin requests

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true })); // allows us to access req.body
app.use(express.json()); // allows us to access req.body in JSON format
app.use(cookieParser("secretcode")); // allows us to access req.cookies

// DATABASE CONNECTION
const DB = process.env.MONGO_URI;
console.log("server is called");
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

// All ROUTES
app.use("/api/auth", require("./routes/authRoutes.js"));
app.use("/api/data", require("./routes/dataRoutes.js"));
app.use("/api/news", require("./routes/newsRoutes.js"));
app.use("/api/stock", require("./routes/stockRoutes.js"));

// ----------------production -----------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  //*Set static folder up in production
  app.use(express.static(path.join(__dirname1, "frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// ------------------production---------------

// Error Handling middlewares
app.use(notFound); // if no route is found then this middleware will run
app.use(errorHandler); // if any error occurs in any route

// APP
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
