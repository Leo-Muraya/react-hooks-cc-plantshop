import React from 'react';

const PlantCard = ({ plant, onMarkSoldOut, onDelete }) => {
  const { id, name, image, price, soldOut } = plant;

  return (
    <div className="plant-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Price: ${price}</p>
      <button onClick={() => onMarkSoldOut(id)}>
        {soldOut ? 'In Stock' : 'Sold Out'}
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default PlantCard;
