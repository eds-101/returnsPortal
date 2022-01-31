import './ReturnSelector.css'
import ItemRow from './ItemRow/ItemRow'
import { useState } from 'react'

//display all elements of an item from an order

//then feed in data dynamically from home login


function ReturnSelector() {
    return(
        <div>
            <ItemRow name="Duck Fat" imgURL="https://bit.ly/3IQZGNX"
                quantity={3} />
        </div>
    )
}

export default ReturnSelector