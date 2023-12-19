
import React from "react";
import Hero from "./compnent/Hero";
import Navbar from "./compnent/Navbar";
import Analytics from "./compnent/Analytics";
import Newsletter from "./compnent/Newsletter";
import Cards from "./compnent/Cards";
import Footer from "./compnent/Footer";
function App() {
  return (
    <div className="App">

        <Navbar/>
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
    </div>
  );
}

export default App;
