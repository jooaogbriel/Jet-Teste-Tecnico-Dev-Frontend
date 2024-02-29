"use client"

import { useState } from 'react';

interface StarRatingProps {
    defaultRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ defaultRating = 0 }) => {
    const [rating, setRating] = useState(defaultRating);
    const totalStars = 5; // Número total de estrelas

    const stars = Array.from({ length: totalStars }, (_, index) => index + 1);

    const handleRatingChange = (newRating: number) => {
        setRating((prevRating) => (newRating === prevRating ? 0 : newRating));
    };

    return (
        <div className="flex">
            {stars.map((star) => (
                <input
                    key={star}
                    type="radio"
                    id={`star${star}`}
                    name="rating"
                    value={star}
                    checked={star === rating}
                    onChange={() => handleRatingChange(star)}
                    className="hidden"
                />
            ))}
            {stars.map((star) => (
                <label
                    key={star}
                    htmlFor={`star${star}`}
                    className="cursor-pointer text-3xl"
                >
                    {/* Adicione classes de cor condicional com base na seleção */}
                    {star <= rating ? (
                        <span className="text-yellow-500">★</span>
                    ) : (
                        <span className="text-gray-500">★</span>
                    )}
                </label>
            ))}
        </div>
    );
};

export default StarRating;
