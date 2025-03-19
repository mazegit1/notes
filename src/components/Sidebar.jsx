import { motion } from "framer-motion";

const Sidebar = ({ setView }) => {
  return (
    <motion.div
      className="w-64 h-screen bg-blue-700 text-white p-5"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-5">Notlar | Mazegit</h1>
      <nav>
        <button
          onClick={() => setView("all")}
          className="block shadow-md w-full text-left p-2 mb-2 hover:scale-105 cursor-pointer bg-gray-700 rounded hover:bg-gray-600"
        >
          📜 Bütün Notlar
        </button>
        <button
          onClick={() => setView("add")}
          className="block shadow-md w-full text-left p-2 mb-2 hover:scale-105 cursor-pointer bg-gray-700 rounded hover:bg-gray-600"
        >
          ➕ Yeni Not Əlavə Et
        </button>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
