import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const subtitleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
};

export default function WelcomeSection() {
  return (
    <motion.div className="text-center mb-8" initial="hidden" animate="visible">
      <motion.h1
        className="text-5xl font-extrabold text-indigo-900 tracking-wide leading-tight mb-4"
        variants={titleVariants}
      >
        Welcome to Recipe Finder
      </motion.h1>
      <motion.p
        className="text-2xl text-gray-700 font-semibold"
        variants={subtitleVariants}
      >
        Search for your favorite recipes
      </motion.p>
    </motion.div>
  );
}
