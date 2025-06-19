import React, { useState } from 'react';
import axios from 'axios';

export default function AddSpot() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    vibe: '',
    lat: '',
    lng: '',
    photos: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    
    // Append form values
    Object.entries(form).forEach(([key, value]) => {
      if (key === 'photos' && value) {
        // Handle photos as FileList
        if (value instanceof FileList) {
          for (let i = 0; i < value.length; i++) {
            data.append('photos', value[i]);
          }
        } else if (Array.isArray(value)) {
          value.forEach(file => data.append('photos', file));
        }
      } else if (value !== null && value !== '') {
        data.append(key, value);
      }
    });

    try {
      await axios.post('http://localhost:5000/api/spots', data);
      alert('Spot added!');
      // Reset form after successful submission
      setForm({
        name: '',
        description: '',
        vibe: '',
        lat: '',
        lng: '',
        photos: null,
      });
    } catch (error) {
      console.error('Error adding spot:', error);
      alert('Failed to add spot. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h3>Add a Hidden Spot</h3>
      <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <br />
      <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <br />
      <select onChange={(e) => setForm({ ...form, vibe: e.target.value })}>
        <option value="">Select Vibe</option>
        <option value="Romantic">Romantic</option>
        <option value="Serene">Serene</option>
        <option value="Creative">Creative</option>
      </select>
      <br />
      <input type="text" placeholder="Latitude" onChange={(e) => setForm({ ...form, lat: e.target.value })} />
      <input type="text" placeholder="Longitude" onChange={(e) => setForm({ ...form, lng: e.target.value })} />
      <br />
      <input type="file" multiple onChange={(e) => setForm({ ...form, photos: e.target.files })} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
