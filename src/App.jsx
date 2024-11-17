import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import React from "react";
import MisRutas from "./routes/MisRutas";

function App() {
  return (
    <>
      <Navbar />
      <MisRutas />
      <Footer />
    </>
  );
}

export default App;
