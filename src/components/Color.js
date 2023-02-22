import React from 'react'
import StarRating from './StartRaiting'
import {FaTrash} from 'react-icons/fa'

const Color = ({id, title, color, rating, onRemove, onRate}) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{height: 50, background: color}}></div>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  )
}

export default Color
