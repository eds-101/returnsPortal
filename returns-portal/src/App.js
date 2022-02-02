import './App.css'  
import { useState, useEffect } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector'; 

const arrayItem = [];

function App() {  

  const [ItemData, setItemData] = useState([])

  function GetItemInfo(data){      
      setItemData(data)    
     

  }      
 
  // ones data has come from the homeLogin page switch to the persons package data.

  return ( 
    <div className="App">
      <HomeLogin GetItemArrayData={GetItemInfo}/> 
      <ReturnSelector SendItemData={ItemData}/>
    </div>
  );
}

export default App;
