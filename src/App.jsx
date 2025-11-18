import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Scheduler from "./components/Scheduler";
import ToggleView from "./components/ToggleView";
import "./App.css";

function App() {
  const [view, setView] = useState("professional");

  return (
    <Router>
      <NavigationBar />
      <div className={`app-container ${view}`}>
        <ToggleView view={view} setView={setView} />

        <Routes>
          <Route path="/" element={<Home view={view} />} />
          <Route path="/about" element={<AboutMe view={view} />} />
          <Route path="/projects" element={<Projects view={view} />} />
          <Route path="/schedule" element={<Scheduler />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
