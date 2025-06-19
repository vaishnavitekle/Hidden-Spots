import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import SpotCard from '../components/SpotCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [spots, setSpots] = useState([]);
  const [location, setLocation] = useState({ lat: 26.2183, lng: 78.1828 }); // Gwalior coords
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lng: longitude });
        fetchSpots(latitude, longitude);
      },
      () => {
        fetchSpots(location.lat, location.lng); // fallback
      }
    );
  }, [location.lat, location.lng]);

  // ✅ Use this for filtering
  const filteredSpots = spots.filter((spot) =>
    spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spot.vibe.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  const fetchSpots = async (lat, lng) => {
    const res = await axios.get(`http://localhost:5000/api/spots/nearby?lat=${lat}&lng=${lng}`);
    setSpots(res.data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Hidden Spots Near You</h2>

      <SearchBar onSearch={setSearchTerm} />

      {/* ✅ Add SearchBar */}
      {/* <SearchBar query={query} setQuery={setQuery} /> */}

      <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: '400px', marginBottom: '20px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {filteredSpots.map((spot) => (
          <Marker
            key={spot._id}
            position={[
              spot.coordinates.coordinates[1],
              spot.coordinates.coordinates[0],
            ]}
          >
            <Popup>{spot.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* ✅ Render filtered spots only */}
      {filteredSpots.map((spot) => (
        <SpotCard key={spot._id} spot={spot} />
      ))}
    </div>
  );
}
