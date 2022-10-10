import { useState } from 'react'
import React from 'react'

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
 

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add an item')
      return
    }
    else if (!price) {
      alert('Please insert the unit price')
      return
    }
    
    onAdd({ name, price })
    console.log(parseInt(price))
    console.log(typeof price)
    setName('')
    setPrice('')
    
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Item</label>
        <input
          type='text'
          placeholder='Add Item'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className='form-control'>
        <label>Unit Price</label>
        <input
          type='number'
          placeholder='Add Unit Price'
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </div>

      <input type='submit' value='Save' className='btn btn-block' />
    </form>
  )
}

export default AddItem