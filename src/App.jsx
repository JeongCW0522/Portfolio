import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
// import LoadingComponent from "./Loading";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="bg-black h-screen pt-20">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tachStack" element={<TechStack />} />
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
