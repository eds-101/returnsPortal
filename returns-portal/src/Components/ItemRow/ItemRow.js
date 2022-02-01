import { useState } from 'react'

//display all elements of an item from an order
// update screen to display new page, after homelogin
//then feed in data dynamically from home login

const returnsReasons = [
    "doesn't fit", "don't like it", "expensive"
]

function ItemRow(props) { 

    return(
        <div>
            <p>{props.name}</p> 
        </div>
    )
}

export default ItemRow