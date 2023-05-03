import "./home.css";

import React, { useEffect, useState } from "react";
import { getByName, getUsers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers); //estados globales
  const [searchString, setsearchString] = useState(""); //estados locales

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  //* filtro por el backend

  const handleChange = (e) => {
    e.preventDefault();
    setsearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(searchString));
  };

  //* filtro por estado
  // const [filtered, setFiltered] = useState(allUsers);
  // const [searchString, setsearchString] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setsearchString(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const filtered = allUsers.filter((user) =>
  //     user.name.toLowerCase().includes(searchString.toLowerCase())
  //   );
  //   setFiltered(filtered);
  // };

  return (
    <div className="home-title">
      <h2 className="home">Home</h2>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      {/* <Cards allUsers={filtered} /> */}
      <Cards allUsers={allUsers} />
    </div>
  );
};

export default Home;
