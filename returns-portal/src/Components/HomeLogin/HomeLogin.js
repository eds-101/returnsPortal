import './HomeLogin.css'

function HomeLogin(){ 

    async function handleSubmit(e){
        // Needs CORS approval when running on localhost

        e.preventDefault()
        const orderNumber = (e.target[0].value)
        const emailAddress = (e.target[1].value)
        const postcode = (e.target[2].value)

        //api call
        try {
            const getOrderDetails = await fetch(`https://api.mintsoft.co.uk/api/Order/Search?APIKey=${process.env.API_KEY}&OrderNumber=PCP17043`)
            const orderDetails = await getOrderDetails.json()
            const userEmail = orderDetails[0].Email
            const userPostCode = orderDetails[0].PostCode

        } catch(error) {
            console.error(e)
        }

    }

    function authenticateUserDetails(){
        // check api calls email/postcode === user submission

    }

    return(
        <div>   
            <div className="Header">
                <p className="ItemHeader">Tu Pack Returns Portal</p> 
            </div> 
            <p className="Info">Bought an item you want to send back? Type in your <b>Order Number</b>, <b>Email</b> or <b>Postcode</b> below.</p>
            <form className="HomeLoginForm" onSubmit={handleSubmit}>  
                <div className="HomeLoginFormItem">
                    <label>Order Number</label>
                    <input type="text"/> 
                </div> 
                <div className="HomeLoginFormItem">
                    <label>Email</label>
                    <input type="text"/>
                </div> 
                <p className="OrText">Or</p>
                <div className="HomeLoginFormItem">
                    <label>Postcode</label>
                    <input type="text"/> 
                </div>
                <button className="SubmitButton" type="submit">Submit</button> 
            </form> 
            <footer>
                <a href="https://support.tupack.co.uk/hc/en-gb">Help and Support</a>
            </footer>
        </div>
    )
} 

export default HomeLogin