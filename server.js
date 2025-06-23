const express=require("express")
// import express from "express";
const app = express();
app.get('/api/notes',(req,res)=>{
    res.send('This is a get method api/notes to view your notes')
})
app.listen(5000, () => {
  console.log("Listening to server ");
});
