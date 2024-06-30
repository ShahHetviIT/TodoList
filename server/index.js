const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/TodoRoute"); // Ensure the path is correct

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config(); // Uncomment to use environment variables

app.use("/api/auth", todoRoutes); // Use the router for the specified path

const PORT = process.env.PORT || 3001; // Default port if not specified in environment variables

const server = app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.error(err.message);
  });


// const express = require("express");
// const mongoose = require("mongoose");
// const todoRoutes = require("./routes/TodoRoute");

// const app = express();

// app.use(express.json()); // To handle JSON payloads

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("DB Connection Successful");
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// app.use("/api/auth", todoRoutes); // Use the router for the specified path

// const server = app.listen(process.env.PORT, () =>
//   console.log(`Server started on ${process.env.PORT}`)
// );