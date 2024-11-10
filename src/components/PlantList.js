import React from 'react';
import PlantCard from './PlantCard';

const PlantList = ({ plants, onMarkSoldOut, onDelete }) => {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onMarkSoldOut={onMarkSoldOut}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PlantList;
