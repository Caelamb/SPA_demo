import "./cards.css";

import Card from "../card/Card";
import React from "react";

const Cards = ({ allUsers }) => {
  return (
    <div className="card-list">
      {allUsers?.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Cards;
