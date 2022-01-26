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
            <h2>Tu Pack Returns Portal</h2> 

            <form className="HomeLoginForm" onSubmit={handleSubmit}>  
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