import './HomeLogin.css'
import { useEffect, useState } from 'react'

// PCP17043 
// const orderNumber = 'PCP17043'
// anitane@gmail.com 

function HomeLogin(props){ 
    const [incorrectAlert, setIncorrectAlert] = useState('')   

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY 

    async function handleSubmit(e){
        // Needs CORS approval when running on localhost
        e.preventDefault()  
        
        const orderNumber = e.target[0].value
        const postcode = e.target[2].value 
        const emailAddress = e.target[1].value
       
        try { 

            const getOrderDetails = await fetch(`https://api.mintsoft.co.uk/api/Order/Search?APIKey=${API_KEY}&OrderNumber=${orderNumber}`) 
            const orderDetails = await getOrderDetails.json()
            const userEmail = orderDetails[0].Email
            const userPostCode = orderDetails[0].PostCode 

            const auth = emailAddress === '' ? authenticateUser(postcode, userPostCode) : authenticateUser(emailAddress, userEmail)
            console.log(auth)
            console.log(userEmail, userPostCode)

            auth ? fetchOrderDetails(orderNumber) : incorrectDetailsAlert()

        } catch(error) {
            console.log(error)
        }
    } 

    function incorrectDetailsAlert(){
        setIncorrectAlert("Try again")
    }

    async function fetchOrderDetails(orderNumber){
            //product ids - Order/id/items
            //quant of item - Order/id/items
            //item name - product/id
            //item picture - product/id
            try { 
                const getOrderItems = await fetch(`https://api.mintsoft.co.uk/api/Order/${orderNumber}/Items?APIKey=${API_KEY}`) 
                const orderItems = await getOrderItems.json() 

                let productsArray = []
                let products = {}

                for(let i = 0; i < orderItems.length; i++) {
                    let productId = orderItems[i].ProductId
                    let quantity = orderItems[i].Quantity 
                    products['ItemID'] = productId 
                    products['ItemQuantity'] = quantity
                    productsArray.push(products) 
                    products = {}
                }
  
                GetItemInfo(productsArray)
                // id and number of items
            } catch(error) {
                console.error(error)
            }

    }  

    async function GetItemInfo(productsArray){ 
 
        let ItemObject = {}
        let ItemInfoArray = []

        try{
            productsArray.map(async (item) => {
                let GetItemInfo = await fetch(`https://api.mintsoft.co.uk/api/Product/${item['ItemID']}?APIKey=${API_KEY}`) 
                let ItemInfo = await GetItemInfo.json()   
                ItemObject['Name'] = ItemInfo.Name  
                ItemObject['Quantity'] = item['ItemQuantity']
                ItemObject['Price'] = ItemInfo.Price 
                ItemObject['ImageURL'] = ItemInfo.ImageURL  
                ItemInfoArray.push(ItemObject) 
                ItemObject = {}
            }) 
        } 
        catch(error){
            console.log(`Error: ${error}`)
        } 

        props.GetItemArrayData(ItemInfoArray) 
    } 
 


    // ItemInfoArray data set
    // Product Name  
    // Price    
    // product image   
    // number of products from the object 



    // Does email or postcode match the order number details.
    function authenticateUser(userCredential, systemEntry){
        return userCredential === systemEntry ? true : false
    }

    return(
        <div className='HomeLogin'>   
            <div className="Header">
                <p className="ItemHeader">Tu Pack Returns Portal</p> 
            </div> 
            <p className="Info">Bought an item you want to send back? Type in your <b>Order Number</b> then <b>Email</b> or <b>Postcode</b> below.</p>
            <form className="HomeLoginForm" onSubmit={handleSubmit}>  
                <div className="HomeLoginFormItem">
                    <label>Order Number</label>
                    <input type="text"/> 
                </div> 
                <div className="HomeLoginFormItem">
                    <label>Email</label>
                    <input type="text"/>
                </div> 
                <p className="OrText">or</p>
                <div className="HomeLoginFormItem">
                    <label>Postcode</label>
                    <input type="text"/> 
                </div>
                <button className="SubmitButton" type="submit">Submit</button> 
                <div className='IncorrectDetails'>
                    <p>{incorrectAlert}</p>
                </div>
            </form>   
            <footer>
                <a href='https://support.tupack.co.uk/hc/en-gb'>Help and Support</a>
            </footer>
        </div>
    )
} 

export default HomeLogin