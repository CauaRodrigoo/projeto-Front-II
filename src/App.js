import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Inicio from "./components/Inicio";
import Contato from "./components/Contato";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
