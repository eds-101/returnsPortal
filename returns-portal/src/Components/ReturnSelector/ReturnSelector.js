import './ReturnSelector.css'
import ItemRow from './ItemRow/ItemRow'
import { useState, useEffect } from 'react'


function ReturnSelector(props) {     


    const [listOfItemsFromOrder, setListOfItemsFromOrder] = useState([])    

    const [customerChosenReturns, setCustomerChosenReturns] = useState([])

    //return data needed
    //POST /api/Return/CreateReturn/{OrderId}
    //POST /api/Return/{id}/AddItem
    //POST /api/Return/{id}/Confirm

    //item id
    //item quantity
    //reason for return

    useEffect(() => {
        setListOfItemsFromOrder(props.SendItemData)
    }, [props.SendItemData])  


    
    // Gets the ItemId and the resion for the return.
    function addItemAndReturnReason(itemAndReturnObject){
        setCustomerChosenReturns(currentReturns => [...currentReturns, itemAndReturnObject])
        console.log(customerChosenReturns)
    }

    // Ones the customer choses the item to return it will go into the listOfReturnFromCustomer.

    
    function ItemToBeReturned(){
        console.log('click')
    }

    return( 
        <div> 
            {listOfItemsFromOrder.map((item) => {  
                return <ItemRow key={item['ItemID']} itemID={item['ItemID']} name={item['Name']} 
                imgURL={item['ImageURL']} quantity={item['Quantity']} 
                price={item['Price']} returnHandler={addItemAndReturnReason} /> 
            })} 
            <button onClick={ItemToBeReturned}>return</button>
        </div>
    )
}

export default ReturnSelector