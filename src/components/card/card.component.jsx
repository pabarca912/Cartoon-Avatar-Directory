import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="cartoon"
      src={`https://robohash.org/${props.cartoon.id}?set=set5`}
    />
    <h2>{props.cartoon.name}</h2>
    <h3>{props.cartoon.email}</h3>
  </div>
);
