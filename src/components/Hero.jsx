import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Hi, I’m Siddharth ✨</h1>
      <p>Student founder. Product builder. AI tinkerer.</p>

      <a href="/projects" className="hero-button">
        View Projects
      </a>
    </motion.div>
  );
}
