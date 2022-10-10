import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Order = ({ order, deleteOrder, cancelOrder }) => {
    const formatdate = (datestring) => {
        return datestring.slice(0, 4) 
                + '-' + datestring.slice(4, 6)
            + '-' + datestring.slice(6, 8)
            + ' ' + datestring.slice(8, 10)
            + ':' +datestring.slice(10, 12)
    }
    return (
        <div
            className={`order ${(order.status === "NEW" ? false : true) && 'status'}`}
            onDoubleClick={() => cancelOrder(order.id)}
        >
        <h3 className='order-dis'>
            {order.item}{' '}
                {(order.status === "NEW" ? false : true) && <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => deleteOrder(order.id)}
                />}
        </h3>
            <div className='order-dis'>
                <div>Quantity : {order.quantity}&emsp;&emsp;&emsp;&emsp;&emsp;</div>
                <div>Total : Rs.{order.totcost}</div>
            </div>
            <div className='order-dis'>
                <div>{formatdate(order.timestamp)}&emsp;&emsp;&emsp;&emsp;&emsp;</div>
                <div>Status : <strong>{order.status}</strong>
                </div>
            </div>
        </div>
    )
}

Order.propTypes = {}

export default Order