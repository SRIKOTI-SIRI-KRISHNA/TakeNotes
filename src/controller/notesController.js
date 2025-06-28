export function getAllNotes(req,res){
    res.status(200).send("you just fetched the notes");
}
export function createNote(req,res){
    res.status(201).send("you created a note successfully");
}
export function updateNote(req,res){
    res.status(201),json({message:"You just updated notes"});
}
export function deleteNote(req,res){
    res.status(201).json({message:"you just deleted notes"});
}