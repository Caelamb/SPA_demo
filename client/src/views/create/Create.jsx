import React, { useState } from 'react'
import "./create.module.css";

const Create = () => {

const [Input, setInput] = useState({
  name: "",
  email: "",
  phone: "",
})

const handleChange = (event) => {
  setInput({
    ...Input,
    [event.target.name]: event.target.value,
  })
};

  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label>Nombre:  </label>
          <input name="name" value={Input.name} onChange={handleChange}/>
        </div>
        <div>
          <label>Email: </label>
          <input name="email" value={Input.email} onChange={handleChange} />
        </div>
        <div>
          <label>Telefono: </label>
          <input name="phone" value={Input.phone} onChange={handleChange} />
        </div>
      </form>
    </div>
  )
}

export default Create
