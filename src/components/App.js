import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';
import Search from './Search';
import Header from './Header';

const App = () => {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch plants.");
        setLoading(false);
      });
  }, []);

  //adds plant
  const handleAddPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => setPlants([...plants, addedPlant]))
      .catch((err) => setError("Failed to add new plant."));
  };

  //sold out
  const handleMarkSoldOut = (id) => {
    const updatedPlants = plants.map((plant) =>
      plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
    );
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ soldOut: true }),
    })
      .then(() => setPlants(updatedPlants))
      .catch((err) => setError("Failed to update plant status."));
  };

  //deletes plant
  const handleDeletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
      .then(() => setPlants(plants.filter((plant) => plant.id !== id)))
      .catch((err) => setError("Failed to delete plant."));
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading plants...</p>
      ) : (
        <PlantList
          plants={filteredPlants}
          onMarkSoldOut={handleMarkSoldOut}
          onDelete={handleDeletePlant}
        />
      )}
    </div>
  );
};

export default App;
