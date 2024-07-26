import React from "react";

const Card = ({ cards }) => {
  return (
    <div className="pokemon-list">
      {cards.map((card, index) => (
        <div className="pokemon-card" key={index}>
          <img src={card.sprites.front_default} alt={card.name} />
          <h2>{card.name.charAt(0).toUpperCase() + card.name.slice(1)}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
