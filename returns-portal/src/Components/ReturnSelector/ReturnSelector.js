import './ReturnSelector.css'
import ItemRow from '../ItemRow/ItemRow'
import { useState, useEffect } from 'react'

//display all elements of an item from an order

//then feed in data dynamically from home login 

//Price has not been put through.  

// return <ItemRow key={index} name={item['Name']} imgURL={item['ImageURL']} quantity={item['Quantity']} />  



function ReturnSelector(props) {     

    console.log(props.SendItemData)   

    return( 
        <div> 
            {props.SendItemData.map((item, index) => {  
                // return <p>{item['Name']}</p>
                return <ItemRow key={index} name={item['Name']} imgURL={item['ImageURL']} quantity={item['Quantity']} price={item['Price']} /> 
            })}
        </div>
    )
}

export default ReturnSelector