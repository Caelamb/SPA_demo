import React, { useEffect, useState } from 'react'
import styles from "./home.module.css";

import Navbar from "../../components/navbar/Navbar";
import Cards from '../../components/cards/Cards';

import { getByName, getUsers } from '../../redux/actions'; 
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers); // Estados globales
  const [ searcString, setsearchString ] = useState("");// Estados locales
  
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  //FILTRO POR EL BACKEND
  
  const handleChange = (event) => {
    event.preventDefault()
    setsearchString(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(getByName(searcString))
  };

  //FILTRO POR ESTADO
  
  /*const [ filtered, setFiltered ] = useState(allUsers);
  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = allUsers.filter((user) => user.name.toLowerCase().includes(searcString.toLowerCase()));
    setFiltered(filtered);
  };*/
  

  return (
    <div className={styles.container}>
      <p className={styles.heading}>soy el home</p>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allUsers={allUsers} />
     { /*<Cards allUsers={filtered} />*/}
    </div>
  )
}

export default Home
