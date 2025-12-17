import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="bg-[#ebe9f0] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techStack" element={<TechStack />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/strengths" element={<Strengths />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
