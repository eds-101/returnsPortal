import './ReturnSelector.css'
import ItemRow from './ItemRow/ItemRow'
import { useState } from 'react'

//display all elements of an item from an order

//then feed in data dynamically from home login 

//Price has not been put through. 

function ReturnSelector(props) {   

    console.log(props.SendItemData)

    return( 
        <div> 
            {props.SendItemData.map((item) => {  
                // return <ItemRow key={index} name={item['Name']} imgURL={item['ImageURL']} quantity={item['Quantity']} /> 
                return <p>{item['Name']}</p>
            })}
        </div>
    )
}

export default ReturnSelector