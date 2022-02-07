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
        
        const orderNumber = e.target[0].value.slice(3)
        console.log(orderNumber)
        
        
        const postcode = e.target[2].value 
        const emailAddress = e.target[1].value
       
        try { 

            const getOrderDetails = await fetch(`https://api.mintsoft.co.uk/api/Order/Search?APIKey=${API_KEY}&OrderNumber=${orderNumber}`) 
            const orderDetails = await getOrderDetails.json() 
            
            // order data 
            // 2021-06-16T10:25:36.7951757 
            // 
            
            console.log(orderDetails[0].OrderDate)

            const userEmail = orderDetails[0].Email
            const userPostCode = orderDetails[0].PostCode 
            const auth = emailAddress === '' ? authenticateUserPostCode(postcode, userPostCode) : authenticateUserEmail(emailAddress, userEmail)
            console.log(auth)
            console.log(userEmail, userPostCode)

           if(auth) {fetchOrderDetails(orderNumber)}  
           setIncorrectAlert('')

        } catch(error) {
            console.log(error)  
            setIncorrectAlert('Invaild Order Number')
        }
    }

    function authenticateUserPostCode(userCredential, systemEntry){
        if(userCredential !== systemEntry){  setIncorrectAlert('Postcode was invaild') } 
        return userCredential === systemEntry ? true : false
    } 

    function authenticateUserEmail(userCredential, systemEntry){
        if(userCredential !== systemEntry){  setIncorrectAlert('Email was invaild') } 
        return userCredential === systemEntry ? true : false
    }

    async function fetchOrderDetails(orderNumber){
            try { 
                const getOrderItems = await fetch(`https://api.mintsoft.co.uk/api/Order/${orderNumber}/Items?APIKey=${API_KEY}`) 
                const orderItems = await getOrderItems.json()  

                    console.log(orderItems) 

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
                ItemObject['ItemID'] = item['ItemID'] 
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

        setTimeout(() => props.GetItemArrayData(ItemInfoArray), 1000)

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
            <footer>
                <a href='https://support.tupack.co.uk/hc/en-gb'>Help and Support</a>
            </footer>
        </div>
    )
} 

export default HomeLogin