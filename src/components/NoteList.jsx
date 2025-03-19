import { useState } from "react";
import { motion } from "framer-motion";

const NoteList = ({ notes, setView, setSelectedNote, deleteNote }) => {
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.note.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bütün Notlar</h2>
      <input
        type="text"
        placeholder="Not axtar..."
        className="w-full p-2 mb-3 border rounded shadow-md focus:outline-blue-700 hover:bg-gray-50 hover:border-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        <div className="notes grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {filteredNotes.map((note) => (
            <motion.li
              key={note.id}
              className="mb-3 p-3 border shadow-md rounded bg-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>{note.note}</p>
              <span className="text-sm text-gray-600">{note.date}</span>
              <div className="mt-2">
                <button
                  onClick={() => {
                    setSelectedNote(note);
                    setView("edit");
                  }}
                  className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded mr-2"
                >
                  ✏️ Düzəlt
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded"
                >
                  🗑 Sil
                </button>
              </div>
            </motion.li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default NoteList;
