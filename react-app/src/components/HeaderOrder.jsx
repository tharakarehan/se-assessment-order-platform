import React from 'react'
import PropTypes from 'prop-types'

const HeaderOrder = ({ text }) => {
  return (
    <header className='header-order'>
      <h1 className='logo'>{text}</h1>
      
    </header>
  )
}

HeaderOrder.propTypes = {}

export default HeaderOrder