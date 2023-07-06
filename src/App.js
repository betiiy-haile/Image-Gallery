import { Routes , Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./index.css"
import Images from "./components/Images/Images";
import Footer from "./components/Footer/Footer";
import About from "./pages/Aboout/About";
import ContactForm from "./pages/Contact/ContactForm";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Images" element={<Images />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
