import React from 'react'
import Order from './Order'

const Orders = ({ orders, deleteOrder, cancelOrder }) => {
  return (
    <>
      {orders.map((order, index) => (
        <Order key={index} order={order} deleteOrder={deleteOrder} cancelOrder={cancelOrder}/>
      ))}
    </>
  )
}

Orders.propTypes = {}

export default Orders