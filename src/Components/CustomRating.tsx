import React, { Fragment, useState } from "react";

interface CustomRatingProps {
  maxRating: number;
  rating: number;
  onRatingChange: (rating: number) => void;
}

const CustomRating: React.FC<CustomRatingProps> = ({
  maxRating,
  rating,
  onRatingChange,
}) => {
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = parseFloat(e.target.value) / 2;
    onRatingChange(rating);
  };

  return (
    <div className="text-center">
      <fieldset className="rate inline-block border-[0px]">
        {[...Array(maxRating * 2).keys()].map((e) => {
          const currentRatingValue = maxRating * 2 - e;
          const currentRating = 5 - e / 2;
          const isHalf = e % 2 !== 0;
          return (
            <Fragment key={e}>
              <input
                type="radio"
                className="hidden mi-star"
                id={`rating${currentRatingValue}`}
                name="rating"
                onChange={handleRatingChange}
                value={currentRatingValue}
                checked={currentRating === rating}
              />
              <label
                htmlFor={`rating${currentRatingValue}`}
                className={`${e % 2 !== 0 && "half"} float-right mi-starLabel`}
                title={`${isHalf ? `${Math.floor(currentRating)} 1/2` : currentRating
                  } stars`}
              ></label>
            </Fragment>
          );
        })}
      </fieldset>
    </div>
  );
};

export default CustomRating;

// const currentRatingValue = maxRating * 2 - e;
// const rating = 5 - e / 2;
// const isHalf = e % 2 !== 0;
{
  /* <input
                type="radio"
                className="hidden mi-star"
                id={`rating${maxRating * 2 - e}`}
                name="rating"
                onChange={handleRatingChange}
                value={maxRating * 2 - e}
              />
              <label
                htmlFor={`rating${maxRating * 2 - e}`}
                className={`${e % 2 !== 0 && "half"} float-right mi-starLabel`}
                title={`${isHalf ? `${Math.floor(rating)} 1/2` : rating} stars`}
              ></label> */
}
