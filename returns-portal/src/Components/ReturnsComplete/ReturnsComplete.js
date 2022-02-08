import './ReturnsComplete.css' 

function ReturnsComplete(props){  

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