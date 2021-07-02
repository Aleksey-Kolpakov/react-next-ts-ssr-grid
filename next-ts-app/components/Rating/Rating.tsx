import React, { useEffect, useState } from 'react';
import styles from './Rating.module.css';
import {RatingProps} from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';

const Rating = ({isEditable=false,rating,...props}:RatingProps):JSX.Element => {

const [ratingArray,setRatingArray]=useState<JSX.Element[]>(new Array(5).fill(<></>));

const costructRating=(currentRating:number)=>{
   const updatedRatingArr= ratingArray.map((elem:JSX.Element,index)=>{
       return (
           <>
           <StarIcon className={cn(styles.star,{
            [styles.filled]:index<currentRating,
            })}/>
           </>
       );
   } );
   setRatingArray(updatedRatingArr);
};

useEffect(()=>{
    costructRating(rating);
},[rating]);

    return (
<div {...props}>
{ratingArray.map((el,index)=>(
    <span key={index}>{el}</span>
))}
</div>

    );
};

export default Rating;