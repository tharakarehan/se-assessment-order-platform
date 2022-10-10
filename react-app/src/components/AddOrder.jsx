import React from 'react'
import { useState, useEffect } from 'react'

const AddOrder = ({items, addOrder}) => {
    
    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [address, setAddress] = useState('')
    const [totcost, setTotcost] = useState(0)
    const [status, setStatus] = useState('NEW')
    const [timestamp, setTimestamp] = useState('')

    useEffect(() => {

        setTotcost(itemmap(item) * quantity)
        // console.log('totcost updated')
    }
    , [item,quantity])

    const itemmap = (item_name) => {
        let i;
        console.log('length', items.length)
        if (items.length) {
            for (i = 0; i < items.length; i++) {
                if (items[i].name === item_name) {
                    return items[i].price
                }
            if (item === '') {
                return 0
            }
            }
        }
        else {
            return 0
        }
    }

    const stringdate = (date) => {
        function pad2(n) {  // always returns a string
            return (n < 10 ? '0' : '') + n;
        }

        return date.getFullYear() +
        pad2(date.getMonth() + 1) + 
        pad2(date.getDate()) +
        pad2(date.getHours()) +
        pad2(date.getMinutes()) +
        pad2(date.getSeconds())

    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!item) {
            alert('Please select an item')
            return
        }
        else if (!quantity){
            alert('Please specify the quatity')
            return
        }
        else if (!address){
            alert('Please add the destination address')
            return
        }
        // setTimestamp(stringdate(new Date()))
        // console.log(timestamp)
        addOrder({ item, quantity, address, totcost,timestamp ,status})
        setItem('')
        setQuantity(0)
        setAddress('')
        setTimestamp('')
        
        
        
      }

    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}>
            <label className = 'form-control-select-text'>Item</label>
                <select className='form-control-select'
                    onChange={(e) => setItem(e.target.value)}
                    value={item}>
                    <option key={0}
                            value={''}>
                            {'Please Select Item'}</option>
                    {items.map((item, key) => {
                        return <option key={item.id}
                            value={item.name}>
                            {item.name}</option>;
                    })}

                </select>
                    
            <div className='form-control'>
                <label>Quantity</label>
                <input
                type='number'
                placeholder='Add Quantity'
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
            </div>
                    
            <div className='form-control'>
                <label>Destination</label>
                <input
                type='text'
                placeholder='Add Destination Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </div>
                <label className='cost'><h3>Total Cost :Rs.{totcost}/=</h3></label>
                <input type='submit' value='Order' className='btn btn-block'
                    onClick={(e) => setTimestamp(stringdate(new Date())) }
                    />
        </form>

        </div>
    )
}

AddOrder.propTypes = {}

export default AddOrder