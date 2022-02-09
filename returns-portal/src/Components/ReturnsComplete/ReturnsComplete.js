import './ReturnsComplete.css' 
import { useState } from 'react'

function ReturnsComplete(props){  

    function returnToHomePage(){props.getHomePageReturn()}

        console.log(props.finalOrder)

    return(
        <div>
            <div>
                <ul>
                    {props.finalOrder.map((product) => {
                       return <li>{` ${product['Quantity'] > 1 ? product['Quantity'] + 'x' : ""}`} {product['Name'].slice(0,1) + product['Name'].slice(1).toLowerCase()}</li>
                    })}
                    <button onClick={returnToHomePage}>Back to returns page</button>
                </ul>
            </div>
        </div>
    )
} 

export default ReturnsComplete