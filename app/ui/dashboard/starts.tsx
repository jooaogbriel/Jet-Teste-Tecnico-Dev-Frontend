// StarRating.tsx
import React from 'react';

interface StarRatingProps {
  rating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }) => {
  const totalStars = 5;

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, i) => i + 1).map((star) => (
        <React.Fragment key={star}>
          <label htmlFor={`star${star}`} className="cursor-pointer text-3xl">
            {star <= rating ? (
              <span className="text-yellow-500">★</span>
            ) : (
              <span className="text-gray-500">★</span>
            )}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default StarRating;
