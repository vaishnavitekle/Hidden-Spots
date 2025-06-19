import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input); // Pass input to parent (Home)
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search spots by name or vibe..."
        style={{
          flex: 1,
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '6px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
  );
}
