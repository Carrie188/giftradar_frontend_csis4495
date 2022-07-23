import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function RatingStars({ratingData}) {

    const number = Math.floor(ratingData);
  return (
    <div className='App'>
      <Rating  ratingValue={ratingData}
        size={20}
        label
        transition
        iconsCount = {number} 
        fillColor='orange'
        emptyColor='orange'
        className='foo' /* Available Props */ 
        />
        {ratingData}
    </div>
  )
}