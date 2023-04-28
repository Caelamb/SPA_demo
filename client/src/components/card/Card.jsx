import React from 'react'
import styles from "../../components/card/card.module.css";

const Card = () => {
  return (
    <div className = {styles.container}>
      <h3 className = {styles.name}>Name: </h3>
      <p className = {styles.email}>Email:</p>
      <p className = {styles.phone}>Phone: </p>
    </div>
  )
}

export default Card
