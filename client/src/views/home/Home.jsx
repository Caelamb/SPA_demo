import React, { useEffect } from 'react'
import styles from "./home.module.css";

import Navbar from "../../components/navbar/Navbar";
import Cards from '../../components/cards/Cards';
import { getUsers } from '../../redux/actions'; 
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return (
    <div className={styles.container}>
      <p className={styles.heading}>soy el home</p>
      <Navbar />
      <Cards allUsers={allUsers} />
    </div>
  )
}

export default Home
