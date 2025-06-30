import Note from "../models/Note.js"

export async function getAllNotes(req,res){
    // res.status(200).send("you just fetched the notes");
    try {
        // we want to get every single note
        const notes = await Note.find().sort({createdAt:-1})  //-1 will sort in descending order(newest first)
        res.status(200).json(notes)
    }
    catch(error){
        console.error("Error in getAllNotes controller :",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export async function getNoteById(req,res){
    try {
        const note=await Note.findById (req.params.id)
        
        if (!note){
            res.status(404).json({message:"Note not found"})
        }
        res.status(200).json(note)
        
    } catch (error) {
        console.error("Error in getNoteById controller :",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export async function createNote(req,res){
    // res.status(201).send("you created a note successfully");
    try {
        const {title,content}=req.body
        // to create new note
        const note = new Note({title,content})
        const savedNote=await note.save()
        res.status(201).json(savedNote)

    } catch (error) {
        console.error("Error in createNote controller :",error)
        res.status(500).json({message:"Internal server error"})
    }
    }

export async function updateNote(req,res){
    // res.status(200),json({message:"You just updated notes"});
    try {
        const {title,content}=req.body
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if (!updatedNote){
            res.status(404).json({message:"Note not found"})
        }
        res.status(200).json(updatedNote)

    } catch (error) {
        console.error("Error in updateNote controller :",error)
        res.status(500).json({message:"Internal server error"})
        
    }
}
export async function deleteNote(req,res){
    // res.status(200).json({message:"you just deleted notes"});
    try {
    //  const {title,content}=req.body
    const deletedNote=await Note.findByIdAndDelete(req.params.id)
    if (!deletedNote){
        res.status(404).json({message:"note does not exit"})
    }
    res.status(200).json({message:"Note deleted successfully"})   
    } catch (error) {
        console.error("Error in DeleteNote controller :",error)
        res.status(500).json({message:"Internal server error"})
    }
    
}