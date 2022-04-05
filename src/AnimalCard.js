import React from "react";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <h3>{props.search}</h3>
      <img
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt={props.name}
      />
      <button className="remove" onClick={props.remove}>
        X
      </button>
      <h2>{props.name}</h2>
      <div className="likes_container">
        <p className="likes">♥ {props.like}</p>
        <button onClick={props.add}>Add like</button>
      </div>
    </div>
  );
};

export default AnimalCard;
