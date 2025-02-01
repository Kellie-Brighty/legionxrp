import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platforms from "./components/Platforms";
import Values from "./components/Values";
import ImageSlider from "./components/ImageSlider";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#171616] text-gray-100">
        <Navbar />
        <main>
          <Hero />
          <Platforms />
          <Values />
          <ImageSlider />
          <Tokenomics />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
