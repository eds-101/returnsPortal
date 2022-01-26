import './HomeLogin.css'

function HomeLogin(){ 

    return(
        <div>  
            <h2>Tu Pack Returns Portal</h2>
            <form> 
                <label>Order Number</label>
                <input type="text"/> 

                <label>Email</label>
                <input type="text"/>

                <label>Postcode</label>
                <input type="text"/> 

                <button type="submit">Submit</button>
            </form>
        </div>
    )
} 

export default HomeLogin