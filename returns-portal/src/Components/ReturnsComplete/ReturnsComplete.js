import './ReturnsComplete.css' 
import { useState } from 'react'

function ReturnsComplete(props){  

    const [completedReturns, setCompletedReturns] = useState([])

    function returnToHomePage(){ props.getHomePageReturn()}

    return(
        <div>
            <div>
                <p>Your items have been verified for return.</p>  
                <button onClick={returnToHomePage}>Back to returns page</button>
            </div>
        </div>
    )
} 

export default ReturnsComplete