import './App.css'  
import { useState, useEffect } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';  

// import DummyData from './Components/Data/orderData'

function App() {  

  // uncomment this when API has need confirmed.  

  const [ItemData, setItemData] = useState([]) 
  const [showScreen, setShowScreen] = useState('Home') 

  function GetItemInfo(data){      
    console.log(data)  
    setItemData(data)     
      setShowScreen('SelectReturn')
  }      

  return ( 
    <div className="App">
      { showScreen === 'Home' ? <HomeLogin GetItemArrayData={GetItemInfo}/> : null }
      { showScreen === 'SelectReturn' ? <ReturnSelector SendItemData={ItemData}/> : null}
    </div>
  );
}

export default App;
