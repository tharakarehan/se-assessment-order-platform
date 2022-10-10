import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="topnav"><Link className="active" to="/">Order</Link>
    <Link to="/orderlist">Order List</Link>
    <Link to="/item">Items</Link>
    <Link to="/about">About</Link></div>
  )
}

export default Navbar