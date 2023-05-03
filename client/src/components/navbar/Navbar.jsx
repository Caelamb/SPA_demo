import "./navbar.css";

import React from "react";

const Navbar = ({ handleChange, handleSubmit }) => {
  return (
    <div className="contenedor-search">
      <form className="form" onChange={handleChange}>
        <input type="search" className="search" placeholder="busqueda..." />
        <button type="submit" onClick={handleSubmit} className="button">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Navbar;
