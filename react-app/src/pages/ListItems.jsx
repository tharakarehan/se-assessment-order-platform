import React from 'react'
import { useState, useEffect } from 'react'
import HeaderItem from '../components/HeaderItem'
import Items from '../components/Items'
import AddItem from '../components/AddItem'

const ListItems = ({items, addItem , deleteItem}) => {
    

    const [showAddItem, setShowAddItem] = useState(true)
    return (
        <div className='container'>
        <HeaderItem
            onAdd={() => setShowAddItem(!showAddItem)}
            showAdd={showAddItem}
        />
        {showAddItem&& <AddItem onAdd={addItem} />}
        {items.length > 0 ? (
                    <Items
                        items={items}
                        onDelete={deleteItem}
                        
                    />
                    ) : (
                    'No Items To Show'
                    )}
        
        </div>
  )
}

export default ListItems