import React from 'react'
import { useState, useEffect } from 'react'
import ListItems from './pages/ListItems'
import Navbar from './components/Navbar'
import OrderPage from './pages/OrderPage'
import OrderList from './pages/OrderList'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  const [items, setItems] = useState([])
  const [orders, setOrders] = useState([])

  //api end points for json server
  //  getOrderUrl => "http://localhost:5000/orders"
  //  getOrdersUrl => "http://localhost:5000/orders"
  //  getItemUrl => "http://localhost:5000/items"
  //  getItemsUrl => "http://localhost:5000/items"
  //  putOrderUrl => "http://localhost:5000/orders"
  //  putItemUrl => ""
  //  postOrderUrl => "http://localhost:5000/orders"
  //  postItemUrl => "http://localhost:5000/items"
  //  deleteOrderUrl => "http://localhost:5000/orders"
  //  deleteItemUrl => "http://localhost:5000/items"

  //api end points for spring boot server
  //  getOrderUrl => "http://localhost:8080/api/v1/orders/getone"
  //  getOrdersUrl => "http://localhost:8080/api/v1/orders/getall"
  //  getItemUrl => ""
  //  getItemsUrl => "http://localhost:8080/api/v1/items/getall"
  //  putOrderUrl => "http://localhost:8080/api/v1/orders/update"
  //  putItemUrl => ""
  //  postOrderUrl => "http://localhost:8080/api/v1/orders/save"
  //  postItemUrl => "http://localhost:8080/api/v1/items/save"
  //  deleteOrderUrl => "http://localhost:8080/api/v1/orders/delete"
  //  deleteItemUrl => "http://localhost:8080/api/v1/items/delete"


  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      const ordersFromServer = await fetchOrders()
      setItems(itemsFromServer)
      setOrders(ordersFromServer)
      
    }

    getItems()
  }, [])

  // Fetch Items
  const fetchItems = async () => {
    const res = await fetch("http://localhost:8080/api/v1/items/getall/") //  getItemsUrl
    const data = await res.json()

    return data
  }

  // Fetch Orders
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:8080/api/v1/orders/getall/") //  getOrdersUrl
    const data = await res.json()

    return data
  }

  // Fetch Item
  // const fetchItem = async (id) => {
  //   const res = await fetch(getItemUrl + `/${id}`)  //  getItemUrl
  //   const data = await res.json()

  //   return data
  // }

  // Fetch Order
  const fetchOrder= async (id) => {
    const res = await fetch(`http://localhost:8080/api/v1/orders/getone/${id}`) //  getOrderUrl
    const data = await res.json()

    return data
  }

  // Add Item
  const addItem = async (item) => {

    const res = await fetch("http://localhost:8080/api/v1/items/save", { //  postItemUrl
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })

    const data = await res.json()

    setItems([...items, data])

  }

  // Add Order
  const addOrder= async (order) => {

    const res = await fetch("http://localhost:8080/api/v1/orders/save" , { //  postOrderUrl
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })

    const data1 = await res.json()

    setOrders([...orders, data1])

  }

  // Delete Item
  const deleteItem = async (id) => {
    const res = await fetch(`http://localhost:8080/api/v1/items/delete/${id}`, { //  deleteItemUrl
      method: 'DELETE',
    })
    
    res.status === 200
      ? setItems(items.filter((item) => item.id !== id))
      : alert('Error Deleting This Task')
  }
  
  // Delete Order 

  const deleteOrder = async (id) => {
    const res = await fetch(`http://localhost:8080/api/v1/orders/delete/${id}`, { //  deleteOrderUrl
      method: 'DELETE',
    })
    
    res.status === 200
      ? setOrders(orders.filter((order) => order.id !== id))
      : alert('Error Deleting This Order')
  }

  // Cancel Order
  const cancelOrder = async (id) => {
    const orderToCancel = await fetchOrder(id)
    // console.log(orderToCancel)
    const updOrder = { ...orderToCancel, status: orderToCancel.status==='NEW' ?  'CANCELLED' : 'NEW'}

    const res = await fetch(`http://localhost:8080/api/v1/orders/update`, { //  putOrderUrl
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updOrder),
    })

    const data = await res.json()

    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: data.status } : order
      )
    )
  }
  
  return (

      <Router>
      
      <Navbar/>
        <Routes>
          <Route
            path='/item'
            element={
              
                <ListItems items={items}
                  addItem={addItem}
                  deleteItem={deleteItem}
                />
            }
        />
         <Route
            path='/'
            element={
              
              <OrderPage items={items} addOrder={addOrder}
                />
            }
        />
        <Route
            path='/orderlist'
            element={
              
              <OrderList orders={orders} deleteOrder={deleteOrder} cancelOrder={cancelOrder}
                />
            }
        />
        <Route
            path='/about'
            element={
              
              <About 
                />
            }
      />
      </Routes>
      
    </Router>
  )
};

export default App;
