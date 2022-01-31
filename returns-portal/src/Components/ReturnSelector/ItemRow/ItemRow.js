import { useState } from 'react'

//display all elements of an item from an order
// update screen to display new page, after homelogin
//then feed in data dynamically from home login

const returnsReasons = [
    "doesn't fit", "don't like it", "expensive"
]

function ItemRow(props) {
    return(
        <div>
        <div className='itemPicture'>
            <img src={props.imgURL} alt="" />
            {/* <img src="https://bit.ly/3IQZGNX" alt=""/>     */}
        </div>
        <div className='itemName'>
            <h2>Duck Fat</h2>
        </div>
        <div className='returnReasonsMenu'>
            <label>Why are you returning this?</label>
            <select required onChange="">
                {returnsReasons.map(r => <option key={r}>{r}</option>)}
                <option value=" "> </option>
            </select>
        </div>
        <div className='returnQuantityMenu'>
        <label>How many do you want to return?</label>
            <input type="number" required /> 
        </div>
        </div>
    )
}

export default ItemRow