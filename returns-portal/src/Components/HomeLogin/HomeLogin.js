import './HomeLogin.css'

function HomeLogin(){ 

    return(
        <div>  
            <h2>Tu Pack Returns Portal</h2> 

            <form className="HomeLoginForm">  
                <div className="HomeLoginFormItem">
                    <label>Order Number</label>
                    <input type="text"/> 
                </div> 
                <div className="HomeLoginFormItem">
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div className="HomeLoginFormItem">
                    <label>Postcode</label>
                    <input type="text"/> 
                </div>
                <button type="submit">Submit</button> 

            </form> 

        </div>
    )
} 

export default HomeLogin