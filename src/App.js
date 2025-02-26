import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Evaluation from "./components/Evaluation";
import About from "./components/About";
import Banner from "./components/banner";
import Navbar from "./components/navbar"; // Import Navbar
import Footer from "./components/footer"; // Import Footer

function App() {
  return (
    <Router>
      <Banner />  {/* Banner at the top */}
      <Navbar />  {/* Navbar below banner */}

      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />  {/* Footer at the bottom */}
    </Router>
  );
}

export default App;
