import React, { useState } from 'react';
import axios from 'axios';

export default function AddReview({ spotId, onCommentAdded }) {
  const [text, setText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return alert('Please write a comment');

    try {
      await axios.post(`http://localhost:5000/api/spots/${spotId}/comment`, {
        text,
        isAnonymous,
      });

      setText('');
      setIsAnonymous(false);
      if (onCommentAdded) onCommentAdded();
    } catch (err) {
      console.error(err);
      alert('Error submitting comment');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h3>Leave a Review</h3>

      <textarea
        className="form-control"
        rows="4"
        placeholder="Share your experience..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />

      {/* Inline checkbox and label */}
      {/* <div style={{ display: 'flex', marginBottom: '15px' }}>
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={(e) => setIsAnonymous(e.target.checked)}
          style={{ marginRight: '5px' }}
        />
        <label>Post as Anonymous</label>
      </div> */}

      <button type="submit">Submit Review</button>
    </form>
  );
}
