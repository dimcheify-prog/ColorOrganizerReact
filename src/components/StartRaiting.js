import React from 'react'
import Star from './Star'

const StarRating = ({
  style = {},
  totalStar = 5,
  selectedStars = 0,
  onRate,
  ...props
}) => {
  const createArray = (length) => [...Array(length)]

  return (
    <div style={{padding: '5px', ...style}} {...props}>
      {createArray(totalStar).map((star, index) => {
        return (
          <Star
            key={index}
            selected={selectedStars > index}
            onSelect={() => onRate(index + 1)}
          />
        )
      })}
      <p>
        {selectedStars} of {totalStar}
      </p>
    </div>
  )
}

export default StarRating
