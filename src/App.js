import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Header from "./components/layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tachStack" element={<TechStack />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/strengths" element={<Strengths />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
