import React, { useEffect, useState, KeyboardEvent } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import StarIcon from "./star.svg";

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (index: number): void => {
    if (isEditable) {
      costructRating(index);
    }
  };

  const changeRating = (index: number): void => {
    if (isEditable && setRating) {
      setRating(index);
    }
  };

  const handleSpace = (event: KeyboardEvent<SVGElement>, index: number) => {
    if (event.code == "Space" && setRating) {
      setRating(index);
    }
  };

  const costructRating = (currentRating: number) => {
    const updatedRatingArr = ratingArray.map((elem: JSX.Element, index) => {
      return (
        <>
          <span
           className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.isEditable]: isEditable,
          })}
            onMouseEnter={() => changeDisplay(index + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => changeRating(index + 1)}
          >
            <StarIcon
             
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(event: KeyboardEvent<SVGElement>) => {
                isEditable && handleSpace(event, index + 1);
              }}
            />
          </span>
        </>
      );
    });
    setRatingArray(updatedRatingArr);
  };

  useEffect(() => {
    costructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((el, index) => (
        <span key={index}>{el}</span>
      ))}
    </div>
  );
};

export default Rating;
