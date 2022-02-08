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
                customerReturnItem['Name'] = itemAndReturnObject['Name']    
                customerReturnItem['ImageURL'] = itemAndReturnObject['ImageURL']    
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
                customerReturnItem['Name'] = itemAndQuantObject['Name']    
                customerReturnItem['ImageURL'] = itemAndQuantObject['ImageURL']    
                itemReturnIsFound = true
            }  
        }) 
        if(!itemReturnIsFound){ setCustomerChosenReturns(currentReturns => [...currentReturns, itemAndQuantObject]) }  

    }  
    
    function submitCustomerReturn(){
        setCustomerChosenReturns(currentReturns => currentReturns.filter((item) => item['Quantity'] >= 1))   
        props.getVerifiedItemReturns(true, customerChosenReturns)
    } 

    return( 
        <div className='returnSelectorContainer'> 
            {allProductsInOrder.map((p) => {  
                return <ItemRow key={p['ID']} itemID={p['ID']} name={p['Name']} returnable={p['Returnable']}
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