import './App.css'  
import { useState, useEffect } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';  

import DummyData from './Components/Data/orderData'


function App() {  

  // uncomment this when API has need confirmed. 
  // const [ItemData, setItemData] = useState([])

  // function GetItemInfo(data){      
  //     setItemData(data)    
  // }      

  return ( 
    <div className="App">
      {/* <HomeLogin GetItemArrayData={GetItemInfo}/>  */} 
      <ReturnSelector SendItemData={DummyData}/>
    </div>
  );
}

export default App;
