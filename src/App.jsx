import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import NavigationBar from "./components/NavigationBar";
import ToggleView from "./components/ToggleView";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Scheduler from "./components/Scheduler";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [view, setView] = useState("professional");

  return (
    <Router>
      <NavigationBar />

      <div className={`app-container ${view}`}>
        <ToggleView view={view} setView={setView} />

        {/* Animate content on toggle */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <Routes>
              <Route path="/" element={<Home view={view} />} />
              <Route path="/about" element={<AboutMe view={view} />} />
              <Route path="/projects" element={<Projects view={view} />} />
              <Route path="/schedule" element={<Scheduler />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
