import './App.css'  
import { useState, useEffect } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';

function App() {  

  const [ItemData, setItemData] = useState([])

  function GetItemInfo(data){ 
    // setItemData(ItemData => [...ItemData, data]) 
    setItemData(data)
  }   

  useEffect(() => {
    setItemData(ItemData)
  }, [ItemData])

  // set statue with array with can be populated with data

  return ( 
    <div className="App">
      <HomeLogin GetItemArrayData={GetItemInfo}/> 
      <ReturnSelector SendItemData={ItemData}/>
    </div>
  );
}

export default App;
