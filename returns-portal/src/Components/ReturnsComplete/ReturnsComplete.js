import './ReturnsComplete.css' 
import { useState } from 'react'

function ReturnsComplete(props){  

    function returnToHomePage(){props.getHomePageReturn()}

        console.log(props.finalOrder)

    return(
        <div>
            <div>
                <p>Your items have been verified for return.</p>  
                <ul>
                    {props.finalOrder.map((product) => {
                       return <li>{product['Name']}</li>
                    })}
                    <button onClick={returnToHomePage}>Back to returns page</button>
                </ul>
            </div>
        </div>
    )
} 

export default ReturnsComplete