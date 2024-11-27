import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#ddd", display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/inicio">Início</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
};

export default Navbar;
