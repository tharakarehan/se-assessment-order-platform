import React from 'react'
import Orders from '../components/Orders'
import HeaderOrder from '../components/HeaderOrder'

const OrderList = ({ orders, deleteOrder, cancelOrder }) => {
  return (
    <div className='container'>
            <HeaderOrder text={"Order List"}/>
            <Orders orders={orders} deleteOrder={deleteOrder} cancelOrder={cancelOrder} />
        </div>
  )
}

OrderList.propTypes = {}

export default OrderList