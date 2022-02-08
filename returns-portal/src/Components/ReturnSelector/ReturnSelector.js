import './ReturnSelector.css'
import ItemRow from './ItemRow/ItemRow'
import { useState, useEffect } from 'react'


function ReturnSelector(props) {     

    const [allProductsInOrder, setAllProductsInOrder] = useState([])    

    const [customerChosenReturns, setCustomerChosenReturns] = useState([])

    useEffect(() => {
        setAllProductsInOrder(props.loadOrder)
        console.log(allProductsInOrder)  
    }, [props.loadOrder])   

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
    
    function submitCustomerReturn(){
        setCustomerChosenReturns(currentReturns => currentReturns.filter((item) => item['Quantity'] >= 1)
        // POST /api/Return/CreateReturn/{OrderId}
        // POST /api/Return/{id}/AddItem
        // POST /api/Return/{id}/Confirm 
        )   

        // true should be changed if submit does not work. 
        props.getVerifiedItemReturns(true)
    } 

    return( 
        <div className='returnSelectorContainer'> 
            {allProductsInOrder.map((p) => {  
                return <ItemRow key={p['ID']} itemID={p['ID']} name={p['Name']} 
                imgURL={p['ImageURL']} quantity={Number(p['Quantity'])} 
                price={p['Price']} returnReasonHandler={addItemAndReturnReason}
                returnQuantityHandler={addItemQuantityToReturn} /> 
            })}  
            <div className='buttonContainer'>
                <button onClick={submitCustomerReturn} className="buttonReturnItems">Review Items</button>
            </div>
        </div>
    )
}

export default ReturnSelector