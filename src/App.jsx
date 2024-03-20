import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="bg-color-tlo max-w-[1440px] mx-auto">
      <Navbar />
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
