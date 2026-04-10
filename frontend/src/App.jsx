import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx" 
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx"
import About from "./components/Aboutus.jsx"
import Footer from "./features/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Clients from "./features/Clients.jsx"

function App() {
return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

            <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
    
        <Route path="/contact" element={<Contact />} />
                <Route path="/clients" element={<Clients />} />

      </Routes>

      <Footer />
    </Router>
    


  );
}

export default App
