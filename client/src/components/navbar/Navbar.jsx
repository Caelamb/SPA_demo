import React from 'react'
import styles from "../../components/navbar/navbar.module.css";

const Navbar = ({ handleChange, handleSubmit }) => {
  return (
    <div className={styles.navbar}>
      <form onChange={handleChange}>
        <input type="search" placeholder='Busqueda...'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>
    </div>
  )
}

export default Navbar
