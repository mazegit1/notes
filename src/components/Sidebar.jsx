import { motion } from "framer-motion";

const Sidebar = ({ setView }) => {
  return (
    <motion.div
      className="xl:w-64 md:w-44 w-20 h-screen bg-blue-800 text-white p-5"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-5">Notlar | Mazegit</h1>
      <nav>
        <button
          onClick={() => setView("all")}
          className="block shadow-md w-full text-left p-2 mb-2 border border-black cursor-pointer bg-black rounded hover:bg-white hover:text-black text-white transition-all ease-in-out duration-200"
        >
          📜 Bütün Notlar
        </button>
        <button
          onClick={() => setView("add")}
          className="block shadow-md w-full text-left p-2 mb-2 border border-black cursor-pointer bg-black rounded hover:bg-white hover:text-black text-white transition-all ease-in-out duration-200"
        >
          ➕ Yeni Not Əlavə Et
        </button>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
