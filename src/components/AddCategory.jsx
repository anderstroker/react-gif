
import React, { useState } from 'react';

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue ] = useState('')
  
  const handleChange = (e) => {
    const {value} = e.target;
    setInputValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategories(cats => [inputValue, ...cats])
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        onChange={handleChange}
        value={inputValue}
        autoComplete="off"
      />
    </form>
  )

}