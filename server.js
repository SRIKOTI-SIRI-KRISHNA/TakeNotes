// const express = require("express");
import express from "express"
import notesRoute from "./routes/notesRoute.js";
// import express from "express";
const app = express();
app.use("/api/notes", notesRoute);

// app.get('/api/notes',(req,res)=>{
//     res.send('This is a get method api/notes to view your notes')
// })
// app.post('/api/createnotes',(req,res)=>{
//     res.send('This is a post method api/createnotes to create your notes')
// })
// app.put('/api/updatenotes',(req,res)=>{
//     res.send('This is a put method api/updatenotes to update your notes')
// })
// app.delete('/api/delnotes',(req,res)=>{
//     res.send('This is a delete method api/notes to delete your notes')
// })
app.listen(5000, () => {
  console.log("Listening to server ");
});
