import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Item = ({ item, onDelete }) => {
  return (
    <div
      className={'item'}
    >
      <h3>
        {item.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(item.id)}
        />
      </h3>
      <p>Rs.{item.price}/=</p>
    </div>
  )
}

export default Item