import React, { Fragment, useState } from "react";

interface StarRatingProps {
  maxRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ maxRating }) => {
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = parseFloat(e.target.value) / 2;
  };

  return (
    <div className="text-center">
      <fieldset className="rate inline-block border-[0px]">
        {[...Array(maxRating * 2).keys()].map((e) => {
          const rating = 5 - e / 2;
          const isHalf = e % 2 !== 0;
          return (
            <Fragment key={e}>
              <input
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
              ></label>
            </Fragment>
          );
        })}
      </fieldset>
    </div>
  );
};

export default StarRating;

{
  /* <input type="radio" id="rating10" name="rating" value="10" />
        <label htmlFor="rating10" title="5 stars"></label>

        <input type="radio" id="rating9" name="rating" value="9" />
        <label className="half" htmlFor="rating9" title="4 1/2 stars"></label>

        <input type="radio" id="rating8" name="rating" value="8" />
        <label htmlFor="rating8" title="4 stars"></label>

        <input type="radio" id="rating7" name="rating" value="7" />
        <label className="half" htmlFor="rating7" title="3 1/2 stars"></label>

        <input type="radio" id="rating6" name="rating" value="6" />
        <label htmlFor="rating6" title="3 stars"></label>

        <input type="radio" id="rating5" name="rating" value="5" />
        <label className="half" htmlFor="rating5" title="2 1/2 stars"></label>

        <input type="radio" id="rating4" name="rating" value="4" />
        <label htmlFor="rating4" title="2 stars"></label>

        <input type="radio" id="rating3" name="rating" value="3" />
        <label className="half" htmlFor="rating3" title="1 1/2 stars"></label>

        <input type="radio" id="rating2" name="rating" value="2" />
        <label htmlFor="rating2" title="1 star"></label>

        <input type="radio" id="rating1" name="rating" value="1" />
        <label className="half" htmlFor="rating1" title="1/2 star"></label> */
}
