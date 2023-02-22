import React from 'react'
import Color from './Color'

const ColorList = ({colors = [], onRemoveColor, onRateColor}) => {
  if (!colors) {
    return <div>NO listed colors</div>
  }
  return colors.map((color) => (
    <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/>
  ))
}

export default ColorList
