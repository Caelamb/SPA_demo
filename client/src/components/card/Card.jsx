import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../components/card/card.module.css";

const Card = ({ user }) => {
  return (
    <div className = {styles.container}>
      <Link to={`/detail/${user.id}`}>
      <h3 className = {styles.name}>{user.name}</h3>
      <p className = {styles.email}>{user.email}</p>
      <p className = {styles.phone}>{user.phone}</p>
      </Link>
    </div>
  )
}

export default Card
