import React from 'react'
import useInput from '../hooks/useInput'

const AddColorForm = ({onNewColor}) => {
  const [titleProps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput('#000000')

  const submit = (e) => {
    e.preventDefault()
    onNewColor(titleProps.value, colorProps.value)
    resetColor()
    resetTitle()
  }

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="Color title..."
        required
      />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm
