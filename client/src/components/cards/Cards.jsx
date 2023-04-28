import React from 'react'
import Card from '../card/Card'
import styles from "../../components/cards/cards.module.css";

const Cards = () => {
  return (
    <div className={styles['card-container']}>
       <div className={styles.card}>
       <Card />
       </div>
       <div className={styles.card}>
       <Card />
       </div>
       <div className={styles.card}>
       <Card />
       </div>
       <div className={styles.card}>
       <Card />
       </div>
    </div>
  )
}

export default Cards
