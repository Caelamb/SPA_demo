import "./card.css";

import { Link } from "react-router-dom";
import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card-container">
      <Link
        to={`/detail/${user.id}`}
        style={{ textDecoration: "none", color: "#0ccac4" }}
      >
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </Link>
    </div>
  );
};

export default Card;
