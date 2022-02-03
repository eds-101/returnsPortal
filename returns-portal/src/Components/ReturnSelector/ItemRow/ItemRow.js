import { useState } from 'react' 
import './ItemRow.css'

//display all elements of an item from an order
// update screen to display new page, after homelogin
//then feed in data dynamically from home login

const returnsReasons = [
    "doesn't fit", "don't like it", "expensive"
]  

// Get itemID, return resion and Quantity

function ItemRow(props) { 

    function populateReturnQuantityOptions(quantity) {
        const quantList = []
        for(let i=0; i <= quantity; i++) {
            quantList.push(i)
        }
        return quantList
    } 

    const formattedQuantityOptions = []

    function getQuantityOptions(options) {
         for(let r=0; r <= options.length; r++) {
        formattedQuantityOptions.push(<option value={r}>{returnsReasons[r]}</option>)
    }}

    const quantity = populateReturnQuantityOptions(props.quantity)

    function returnReason(reason){
        console.log('hello world')
        console.log(reason.target.value)
    }
    

    return(
        
        <div className='container'>
            <div className='left'>
                <div className='itemPicture'>
                    <img src={props.imgURL} alt=""/>
                </div>
            </div>
            <div className='middle'>
                <h2>{props.name}</h2>
                <div className='returnReasonsMenu'>
                    <label>Why are you returning this?</label>
                    <select onChange={ (e) => returnReason(e)}>
                        {returnsReasons.map((r) => <option value={r}>{r}</option>)}
                    </select> 
                </div>
            </div>
            <div className='right'>
                <div className='returnQuantityMenu'>
                    <label>How many do you want to return?</label>
                    
                    <select required>
                        {quantity.map(i => <option key={i}>{Number(i)}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ItemRow