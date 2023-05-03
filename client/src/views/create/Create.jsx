import "./create.css";

import React, { useState } from "react";

const Create = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validate = (input) => {
    let errors = {};

    if (input.name === "" || input.name[0].trim().length === 0) {
      errors.name = "Ingrese un nombre";
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      errors.email = "El correo no es valido";
    }

    return errors;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(error).length === 0) {
      alert("HACEMOS EL DISPATCH");
    } else {
      alert("FALTAN CAMPOS A COMPLETAR");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "16rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input name="name" value={input.name} onChange={handleChange} />
        </div>
        <span>{error.name}</span>
        <div>
          <label>Email: </label>
          <input name="email" value={input.email} onChange={handleChange} />
        </div>
        <span>{error.email}</span>
        <div>
          <label>Telefono: </label>
          <input name="phone" value={input.phone} onChange={handleChange} />
        </div>
        <span>{error.phone}</span>
        {Object.keys(error).length === 0 ? (
          <button type="submit">ENVIAR</button>
        ) : null}
      </form>
    </div>
  );
};

export default Create;
