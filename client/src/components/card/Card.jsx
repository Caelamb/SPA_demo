import React from 'react'
import styles from "../../components/card/card.module.css";

const Card = ({ user }) => {
  return (
    <div className = {styles.container}>
      <h3 className = {styles.name}>{user.name}</h3>
      <p className = {styles.email}>{user.email}</p>
      <p className = {styles.phone}>{user.phone}</p>
    </div>
  )
}

export default Card
