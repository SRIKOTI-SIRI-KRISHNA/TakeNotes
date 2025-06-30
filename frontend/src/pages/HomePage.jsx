import React, { use, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  // to be able to fetch the notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        // const data=await res.json();
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("failed to fetch notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && 
          <div className="text-center text-primary py-10">Loading Notes...</div>
        }
        {notes.length===0 && !isRateLimited && <NotesNotFound/>}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {" "}
            {/* md means  medium screen and lg means larger screens*/}
            {notes.map(note=>(
              <div>
                {/* {note.title} | {note.content} */}
                <NoteCard key={note._id} note={note} setNotes={setNotes} /> </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
