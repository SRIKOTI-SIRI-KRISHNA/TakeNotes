// const express = require("express");
import express from "express";
import notesRoute from "./routes/notesRoute.js";
const app = express();
app.use("/api/notes", notesRoute);
// app.use("/api/products", productRoute); for adding products
// app.use("/api/payment", paymentRoute); for payment
// app.use("/api/posts", postaRoute);for posts related to social media
// app.use("/api/email", emailRoute);   for emails

app.listen(5000, () => {
  console.log("Listening to server ");
});
// mongodb+srv://sirikrishna922:hJL7KSZse64oYyen@cluster0.5xosj8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0