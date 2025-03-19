import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { initialNotes } from "./data/notes";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [selectedNote, setSelectedNote] = useState(null);
  const [view, setView] = useState("all"); // "all", "add", "edit"

  // Yeni not əlavə et
  const addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now() }]);
    setView("all");
  };

  // Notu düzəlt
  const updateNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
    setView("all");
  };

  // Notu sil
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setView("all");
  };

  return (
    <div className="flex h-screen">
      {/* Sol Sidebar */}
      <Sidebar setView={setView} />

      {/* Sağ Content with Animation */}
      <motion.div
  className="flex-1 p-6 overflow-y-auto" // Scrollable area for notes
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
  {view === "all" && <NoteList notes={notes} setView={setView} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />}
  {view === "add" && <NoteForm onSave={addNote} />}
  {view === "edit" && selectedNote && <NoteForm note={selectedNote} onSave={updateNote} />}
</motion.div>

    </div>
  );
}

export default App;
