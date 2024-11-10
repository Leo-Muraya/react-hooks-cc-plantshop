import React from 'react';

const PlantPage = ({ id, plants }) => {
  const plant = plants.find(p => p.id === parseInt(id));
  if (!plant) return <div>Plant not found</div>;

  return (
    <div className="plant-page">
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>Price: ${plant.price}</p>
      <p>{plant.soldOut ? 'This plant is sold out' : 'This plant is available'}</p>
    </div>
  );
};

export default PlantPage;
