import './HomeLogin.css'

function HomeLogin(){ 

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
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