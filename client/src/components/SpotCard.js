// import React from 'react';
// import AddReview from './pages/AddReview';

// export default function SpotCard({ spot }) {
//   return (
//     <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
//       <h4>{spot.name}</h4>
//       <p>{spot.description}</p>
//       {spot.photos?.[0] && (
//         <img src={spot.photos[0]} alt="spot" style={{ width: '100%', maxHeight: '300px' }} />
//       )}
//     </div>
//   );
// }

// {spot.comments?.length > 0 && (
//   <div style={{ marginTop: '20px' }}>
//     <h4>Reviews</h4>
//     {spot.comments.map((c, i) => (
//       <p key={i}><strong>{c.isAnonymous ? 'Anonymous' : 'User'}:</strong> {c.text}</p>
//     ))}
//   </div>
// )}

// <AddReview spotId={spot._id} onCommentAdded={reloadSpotData} />