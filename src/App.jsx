import Contect from "./pages/contect/Contect";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Project from "./pages/projects/Projects";
import Services from "./pages/services/Services";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contect" element={<Contect />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Home" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
