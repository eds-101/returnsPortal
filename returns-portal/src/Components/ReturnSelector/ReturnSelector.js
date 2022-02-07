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

    //quantityToReturn

    useEffect(() => {
        setListOfItemsFromOrder(props.SendItemData)
    }, [props.SendItemData])   

    useEffect(() => {
        setCustomerChosenReturns(customerChosenReturns)  
        console.log(customerChosenReturns)  
    }, [customerChosenReturns])

    
    // Gets the ItemId and the resion for the return.
    function addItemAndReturnReason(itemAndReturnObject){   
        let itemReturnIsFound = false
        customerChosenReturns.map((customerReturnItem) => { 
            if(customerReturnItem['ItemId'] === itemAndReturnObject['ItemId']){  
                customerReturnItem['Reason'] = itemAndReturnObject['Reason']    
                itemReturnIsFound = true 
            }  
        }) 
        if(!itemReturnIsFound){ setCustomerChosenReturns(currentReturns => [...currentReturns, itemAndReturnObject])}  
    }

    function addItemQuantityToReturn(itemAndQuantObject){   
        let itemReturnIsFound = false
        customerChosenReturns.map((customerReturnItem) => { 
            if(customerReturnItem['ItemId'] === itemAndQuantObject['ItemId']){  
                customerReturnItem['Quantity'] = itemAndQuantObject['Quantity']     
                itemReturnIsFound = true
            }  
        }) 
        if(!itemReturnIsFound){ setCustomerChosenReturns(currentReturns => [...currentReturns, itemAndQuantObject]) }  

    }  

    // Ones the customer choses the item to return it will go into the listOfReturnFromCustomer.

    
    function submitCustomerReturn(){
        setCustomerChosenReturns(currentReturns => currentReturns.filter((item) => item['Quantity'] >= 1)
        // POST /api/Return/CreateReturn/{OrderId}
        // POST /api/Return/{id}/AddItem
        // POST /api/Return/{id}/Confirm
        )
    } 

    return( 
        <div className='returnSelectorContainer'> 
            {listOfItemsFromOrder.map((item) => {  
                return <ItemRow key={item['ItemID']} itemID={item['ItemID']} name={item['Name']} 
                imgURL={item['ImageURL']} quantity={item['Quantity']} 
                price={item['Price']} returnReasonHandler={addItemAndReturnReason}
                returnQuantityHandler={addItemQuantityToReturn} /> 
            })}  
            <div className='buttonContainer'>
                <button onClick={submitCustomerReturn} className="buttonReturnItems">Review Items</button>
            </div>
        </div>
    )
}

export default ReturnSelector