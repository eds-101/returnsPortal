import './ReturnSelector.css'
import ItemRow from '../ItemRow/ItemRow'
import { useState, useEffect } from 'react'


function ReturnSelector(props) {     

    // console.log(props.SendItemData)    

    const [listOfItemsFromOrder, setlistOfItemsFromOrder] = useState([])    

    const [listOfReturnItemsFromCustomer, setlistOfReturnItemsFromCustomer] = useState([])

    useEffect(() => {
        setlistOfItemsFromOrder(listOfItemsFromOrder => [...listOfItemsFromOrder, ...props.SendItemData])
    }, [props.SendItemData]) 

    // Ones the customer choses the item to return it will go into the listOfReturnFromCustomer.
    
    console.log(listOfItemsFromOrder)

    return( 
        <div> 
            {listOfItemsFromOrder.map((item) => {  
                return <ItemRow key={item['itemID']} name={item['Name']} imgURL={item['ImageURL']} quantity={item['Quantity']} price={item['Price']} /> 
            })}
        </div>
    )
}

export default ReturnSelector