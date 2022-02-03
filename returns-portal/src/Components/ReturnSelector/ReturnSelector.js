import './ReturnSelector.css'
import ItemRow from './ItemRow/ItemRow'
import { useState, useEffect } from 'react'


function ReturnSelector(props) {     


    const [listOfItemsFromOrder, setlistOfItemsFromOrder] = useState([])    

    const [listOfReturnItemsFromCustomer, setlistOfReturnItemsFromCustomer] = useState([])

    useEffect(() => {
        setlistOfItemsFromOrder(props.SendItemData)
    }, [props.SendItemData])  

    
    function ItemToBeReturned(){
        console.log('click')
    }
    
    // Gets the ItemId and the resion for the return.
    function setItemReasion(info){
        console.log(info)
    }

    // Ones the customer choses the item to return it will go into the listOfReturnFromCustomer.

    return( 
        <div> 
            {listOfItemsFromOrder.map((item) => {  
                return <ItemRow key={item['ItemID']} itemID={item['ItemID']} name={item['Name']} 
                imgURL={item['ImageURL']} quantity={item['Quantity']} 
                price={item['Price']} returnHandler={setItemReasion} /> 
            })} 
            <button onClick={ItemToBeReturned}>return</button>
        </div>
    )
}

export default ReturnSelector