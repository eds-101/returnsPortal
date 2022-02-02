import { useState } from 'react'

//display all elements of an item from an order
// update screen to display new page, after homelogin
//then feed in data dynamically from home login

const returnsReasons = [
    "doesn't fit", "don't like it", "expensive"
]

function ItemRow(props) {  

    // For a person to cick on the item. 
    // Wich will go into a return item state.  
    
    // 

    return(
        <div>
            <p>{props.name}</p>  
            <p>Quantity {props.quantity}</p>  
            <img scr={props.imgURL} alt="one" width="100"/>
            <p>£{props.price}</p>
        </div>
    )
}

export default ItemRow