import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";

// Load the environment variables from the .env file
dotenv.config();

const app = express();

// Retrieve environment variables or set default values

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;
const corsOrigin = process.env.CORS_ORIGIN;

// Middleware to parse JSON in HTTP requests
app.use(express.json());

// Middleware for parsing URL-encoded data (HTML forms) 
app.use(express.urlencoded({ extended: false }));

// Dynamic CORS configuration via environment variable
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

// Routes
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World from API NODE SERVER!");
});

async function main() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connection to MongoDB successful");

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error("Connection to MongoDB failed :", error);
  }
}

main();
