import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const HeaderItem = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1 className='logo'>{title}</h1>
      
        <Button
          color={showAdd ? 'red' : 'black'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      
    </header>
  )
}

HeaderItem.defaultProps = {
  title: 'Item List',
}

HeaderItem.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default HeaderItem