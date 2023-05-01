import React from 'react'
import styles from "./home.module.css";

import Navbar from "../../components/navbar/Navbar";
import Cards from '../../components/cards/Cards';

const Home = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>soy el home</p>
      <Navbar />
      <Cards />
    </div>
  )
}

export default Home
