import { useState } from 'react' 
import './ItemRow.css'

//display all elements of an item from an order
// update screen to display new page, after homelogin
//then feed in data dynamically from home login

const returnsReasons = [
    "doesn't fit", "don't like it", "expensive"
]  

// Get itemID, return resion and Quantity

function ItemRow(props) { 

    function populateReturnQuantityOptions(quantity) {
        const quantList = []
        for(let i=0; i <= quantity; i++) {
            quantList.push(i)
        }
        return quantList
    } 

    const quantity = populateReturnQuantityOptions(props.quantity)

    function returnReason(reason, id, name, imageURL){
        let StoringReasonAndItemID = {'ItemId': id, 'Reason': reason.target.value, 'Name': name, 'ImageURL': imageURL}  
        props.returnReasonHandler(StoringReasonAndItemID)
    }

    function returnQuantity(quantity, id, name, imageURL){
        const itemQuantityToReturn = {'ItemId': id, 'Quantity': Number(quantity.target.value), 'Name': name, 'ImageURL': imageURL}
        props.returnQuantityHandler(itemQuantityToReturn)  
    }
    
    // store data localy to send up to the ReturnSelector. 

    return(
        
        <div className='container'> 
            <div className='left'>
                <div className='itemPicture'>
                    <img src={props.imgURL} alt=""/> 
                </div>
            </div>
            <div className='middle'>
                <div className='returnQuantityMenu'>
                    <h2>{props.name}</h2>
                        <label>How many do you want to return?</label>
                        <select required onChange={(e) => returnQuantity(e, props.itemID, props.name, props.ImageURL)}>
                            {quantity.map(i => <option value={i}>{Number(i)}</option>)}
                        </select>
                    </div>
                </div>
            <div className='right'>
                <div className='returnReasonsMenu'>
                    <label>Why are you returning this?</label>
                    <select onChange={(e) => returnReason(e, props.itemID, props.name, props.ImageURL)}>
                        <option value="">Select a reason...</option>
                        {returnsReasons.map((r) => <option value={r}>{r}</option>)}
                    </select> 
                </div>
            </div>
        </div>
    )
}

export default ItemRow