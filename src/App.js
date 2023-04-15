import React from "react";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Analytics from "./components/Analytics";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Analytics />
      <Contact />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
