import React from 'react'
import AddOrder from '../components/AddOrder'
import HeaderOrder from '../components/HeaderOrder'

const OrderPage = ({ items, addOrder }) => {

    

    return (
        <div className='container'>
            <HeaderOrder  text={"Place Your Order"}/>
            <AddOrder items={items} addOrder={addOrder}  />
        </div>
    )
    }

OrderPage.propTypes = {}

export default OrderPage