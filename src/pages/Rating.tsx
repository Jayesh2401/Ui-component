import React, { useState } from "react";
import CustomRating from "../Components/CustomRating";

const Rating: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newValue: number) => {
    setRating(newValue);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Custom Star Rating Example
      </h1>
      <CustomRating maxRating={5} onRatingChange={handleRatingChange}  rating={rating}/>

      <p>Current Rating: {rating}</p>
    </div>
  );
};

export default Rating;
