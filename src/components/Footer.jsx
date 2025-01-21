import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-900 text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Recipe Finder</h2>
            <p className="text-indigo-200">Discover delicious recipes</p>
          </div>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Elgargati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://x.com/MedElgargati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition-colors duration-300"
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/mohammedelgargati/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 text-center text-indigo-200">
          <p>&copy; {currentYear} Recipe Finder. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
