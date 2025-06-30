import mongoose from "mongoose";
// 1. create a schema
const noteSchema=new mongoose.Schema({
    // we will put our fields here
    title:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
},
{timestamps:true} //created and updated at fields
);
// 2.create model based off of that schema
const Note=mongoose.model("Note",noteSchema);  //this creates a model based off the schema noteSchema
export default  Note;