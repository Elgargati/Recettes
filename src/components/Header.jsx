import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Header({ onSearch, loading }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="text-center my-8 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-6"
      >
        Recipe Finder
      </motion.h1>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="flex justify-center w-full"
      >
        <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
          {loading ? (
            <div className="w-full h-14 bg-gray-200 rounded-full animate-pulse"></div>
          ) : (
            <>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="w-full p-4 pr-14 text-base sm:text-lg rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                disabled={loading}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={loading}
              >
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}
        </div>
      </motion.form>
    </header>
  );
}
