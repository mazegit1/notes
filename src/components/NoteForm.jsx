import { useState } from "react";
import { motion } from "framer-motion";

const NoteForm = ({ note, onSave }) => {
  const [noteText, setNoteText] = useState(note ? note.note : "");
  const [noteDate, setNoteDate] = useState(note ? note.date : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: note ? note.id : Date.now(), note: noteText, date: noteDate });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="p-4 border rounded bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">{note ? "Notu Düzəlt" : "Yeni Not Əlavə Et"}</h2>
      <div className="mb-2">
        <label className="block font-bold">Not:</label>
        <textarea
          className="w-full p-2 border rounded"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-bold">Tarix:</label>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={noteDate}
          onChange={(e) => setNoteDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        ✅ Yadda Saxla
      </button>
    </motion.form>
  );
};

export default NoteForm;
