import './HomeLogin.css'
import { useState } from 'react'

// PCP17043 
// const orderNumber = 'PCP17043'
// anitane@gmail.com

function HomeLogin(props){ 
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
            console.log(orderNumber, auth, userEmail, userPostCode)

            auth ? fetchOrder(orderNumber) : alert("Try again")

        } catch(error) {
            console.log(error)
        }
    } 

    function authenticateUser(userCredential, systemEntry){
        return userCredential === systemEntry ? true : false
    }

    async function fetchOrder(orderNumber){
        try { 
            const getProductsFromOrder = await fetch(`https://api.mintsoft.co.uk/api/Order/${orderNumber}/Items?APIKey=${API_KEY}`) 
            const productsRawFormat = await getProductsFromOrder.json() 

            let productsInOrder = [], product = {}
            for(let i = 0; i < productsRawFormat.length; i++) {
                let id = productsRawFormat[i].ProductId, quantity = productsRawFormat[i].Quantity 
                product['ID'] = id 
                product['Quantity'] = quantity
                productsInOrder.push(product) 
                product = {}
            }

            populateProductDetails(productsInOrder)
            // id and number of items
        } catch(error) {
            console.error(error)
        }
    }  

    async function populateProductDetails(products){ 
        let listOfProducts = [], product = {} 

        try{
            products.map(async (p) => {
                let productApiCall = await fetch(`https://api.mintsoft.co.uk/api/Product/${p['ID']}?APIKey=${API_KEY}`) 
                let rawProductData = await productApiCall.json()   
                product['Name'] = rawProductData.Name  
                product['Quantity'] = p['ItemQuantity']
                product['Price'] = rawProductData.Price 
                product['ImageURL'] = rawProductData.ImageURL  
                listOfProducts.push(product) 
                product = {}
            }) 
        } 
        catch(error){
            console.log(`Error: ${error}`)
        } 

        props.GetItemArrayData(listOfProducts)
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
            </form>   
            <footer>
                <a href='https://support.tupack.co.uk/hc/en-gb'>Help and Support</a>
            </footer>
        </div>
    )
} 

export default HomeLogin