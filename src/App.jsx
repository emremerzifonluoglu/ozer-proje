import İletişim from "./pages/contect/Contect";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hakkımızda from "./pages/about/About";
import Projeler from "./pages/detalle/Detalle";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hakkımızda" element={<Hakkımızda />} />
          <Route path="/İletişim" element={<İletişim />} />
          <Route path="/Projeler" element={<Projeler />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
