import { useState } from 'react' 
import './ItemRow.css'

//display all elements of an item from an order
// update screen to display new page, after homelogin
//then feed in data dynamically from home login

const returnsReasons = [
    "doesn't fit", "don't like it", "expensive"
]

function ItemRow(props) {
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
                    <select required onChange="">
                        {returnsReasons.map(r => <option key={r}>{r}</option>)}
                    </select>
                </div>
            </div>
            <div className='right'>
                <div className='returnQuantityMenu'>
                <label>How many do you want to return?</label>
                    <input type="number" required /> 
                </div>
            </div>

        </div>
    )
}

export default ItemRow