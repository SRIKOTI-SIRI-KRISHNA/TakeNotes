// const express = require("express");
import dotenv from "dotenv";
import cors from "cors";
import express from "express";

import notesRoute from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// cors-cross oriented response service
if (process.env.NODE_ENV === "production") {
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);}

//middleware
app.use(express.json()); //this middleware will parse JSON bodies: req.body
app.use(rateLimiter);
//our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} and Req url is ${req.url}`);
//   next();
// })

app.use("/api/notes", notesRoute);
// app.use("/api/products", productRoute); for adding products
// app.use("/api/payment", paymentRoute); for payment
// app.use("/api/posts", postaRoute);for posts related to social media
// app.use("/api/email", emailRoute);   for emails
// app.use(express.static(path.join(__dirname, "../frontend/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
// });
if(process.env.NODE_ENV ==="production" ) {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});
}
// first the application should connect to database and then should start listening to server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Listening to server ", PORT);
  });
});
// mongodb+srv://sirikrishna922:hJL7KSZse64oYyen@cluster0.5xosj8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
