import React, { useState } from 'react';

const NewPlantForm = ({ onAddPlant }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image || !price) return; 

    const newPlant = {
      name,
      image,
      price: parseFloat(price),
    };

    onAddPlant(newPlant);
    setName('');
    setImage('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Plant name"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default NewPlantForm;
