import './HomeLogin.css'
import { useEffect, useState } from 'react'

// PCP17043 
// const orderNumber = 'PCP17043'
// anitane@gmail.com 

function HomeLogin(props){ 
    const [incorrectAlert, setIncorrectAlert] = useState('')     

    useEffect(() => {
        setIncorrectAlert(incorrectAlert)
    }, [incorrectAlert])

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY 

    async function handleSubmit(e){
        // Needs CORS approval when running on localhost
        e.preventDefault()  
        
        const submittedOrderNumber = e.target[0].value.slice(3) //To ADD: or no slice if it starts with a number
        const submittedPostcode = e.target[2].value.trim()
        const submittedEmailAddress = e.target[1].value.trim()
       
        try { 
            const getOrderDetails = await fetch(`https://api.mintsoft.co.uk/api/Order/Search?APIKey=${API_KEY}&OrderNumber=${submittedOrderNumber}`) 
            const orderDetails = await getOrderDetails.json() 
            console.log(orderDetails)
            
            const orderDateparsed = new Date(orderDetails[0].OrderDate.slice(0,10)) // Date obj from 2021-06-16T10:25:36.7951757  

            const orderEmail = orderDetails[0].Email
            const orderPostCode = orderDetails[0].PostCode 
            const auth = submittedEmailAddress === '' ? authenticateUser("postcode", submittedPostcode, orderPostCode) : authenticateUser("email", submittedEmailAddress, orderEmail)
            console.log(auth, submittedEmailAddress, submittedPostcode)

            if(auth) {
                const startOrder = await fetchOrderStart(submittedOrderNumber, orderDateparsed)
                console.log(startOrder)
                const updatedOrder = await completeOrderDetails(startOrder)
                console.log(updatedOrder)
                setTimeout(() => props.getFinalisedOrder(updatedOrder), 1000)
            }  
            
        } catch(error) {
            console.log(error)  
        }
    }
    
    function authenticateUser(method, customerEntry, systemEntry){
        if(customerEntry === systemEntry) {
            setIncorrectAlert('')
            return true
        }
        else {
            setIncorrectAlert(`Please check the ${method ==="postcode" ? "postcode" : "email address"} you entered and try again!`)
            return false
            }
    }

    // function validateOrderDate(orderDate, daysToAllowReturns) {
    //     const daysSinceOrderRaw = new Date - orderDate
    //     const daysSinceOrder = daysSinceOrderRaw/(1000 * 3600 * 24)
    //     return daysSinceOrder < daysToAllowReturns ? true : false
    // }

    async function fetchOrderStart(orderNumber, orderDate){
        try { 
            const getProductsFromOrder = await fetch(`https://api.mintsoft.co.uk/api/Order/${orderNumber}/Items?APIKey=${API_KEY}`) 
            const productsRaw = await getProductsFromOrder.json() 

            let productsInOrder = [], product = {}
            for(let i = 0; i < productsRaw.length; i++) {
                    let id = productsRaw[i].ProductId, quantity = productsRaw[i].Quantity 
                    product['ID'] = id 
                    product['Quantity'] = quantity
                    console.log(quantity)
                    product['OrderDate'] = orderDate
                    productsInOrder.push(product) 
                    product = {}
                }
            return productsInOrder

            } catch(error) {
                console.log(error)
            }
    }  

    async function completeOrderDetails(initialOrderDetails){ 
        let listOfProducts = [], product = {} 

        try{
            initialOrderDetails.map(async (initialProductData) => {
                let productApiCall = await fetch(`https://api.mintsoft.co.uk/api/Product/${initialProductData['ID']}?APIKey=${API_KEY}`) 
                let rawProductData = await productApiCall.json()  
                product['ID'] = initialProductData['ID'] 
                product['Quantity'] = initialProductData['Quantity']
                product['OrderDate'] = initialProductData['OrderDate']
                product['Name'] = rawProductData.Name  
                product['Price'] = rawProductData.Price 
                product['ImageURL'] = rawProductData.ImageURL  
                listOfProducts.push(product) 
                product = {}
            }) 
        } 
        catch(error){
            console.log(`Error: ${error}`)
        }  
        return listOfProducts
    }  

    return(
        <div>
            <p className="Info">Bought an item you want to send back? Type in your <b>Order Number</b> then <b>Email</b> or <b>Postcode</b> below.</p>
            <form className="HomeLoginForm" onSubmit={handleSubmit}>  
                <div className="HomeLoginFormItem">
                    <label>Order Number</label>
                    <input type="text" placeholder="PCP17043"/> 
                </div> 
                <div className="HomeLoginFormItem">
                    <label>Email</label>
                    <input type="text" placeholder='anitane@gmail.com'/>
                </div> 
                <p className="OrText">or</p>
                <div className="HomeLoginFormItem">
                    <label>Postcode</label>
                    <input type="text" placeholder="N20JJ"/> 
                </div>
                <button className="SubmitButton" type="submit">Submit</button> 
                <div className='IncorrectDetails'>
                    <p>{incorrectAlert}</p>
                </div>
            </form>   

        </div>
    )
} 

export default HomeLogin