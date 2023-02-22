import React, {useState} from 'react'
import ColorList from './components/ColorList'
import AddColorForm from './components/AddColorForm'
import colorData from './color-data.json'
import {v4} from 'uuid'

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ]
          setColors(newColors)
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id)
          setColors(newColors)
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) => {
            return color.id === id ? {...color, rating} : color
          })
          setColors(newColors)
        }}
      />
    </>
  )
}

export default App
