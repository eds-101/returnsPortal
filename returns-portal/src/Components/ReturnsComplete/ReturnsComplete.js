import './ReturnsComplete.css' 
import { useState } from 'react'

function ReturnsComplete(props){  

    function returnToHomePage(){props.getHomePageReturn()}

        console.log(props.finalOrder)

    return(
        <div>
            <div className='headline'>
                <h2>
                    Your return has been completed
                </h2>
                <h4>
                    Confirmation of returned products:
                </h4>
            </div>
            <div className='body'>
                <ul>
                    {props.finalOrder.map((product) => {
                       return <li>{` ${product['Quantity'] > 1 ? product['Quantity'] + 'x' : ""}`} {product['Name'].slice(0,1) + product['Name'].slice(1).toLowerCase()}</li>
                    })}
                    <button className='button' onClick={returnToHomePage}>Back to Returns page</button>
                </ul>
            </div>
        </div>
    )
} 

export default ReturnsComplete