import './App.css'  
import { useState, useEffect } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';  

// import DummyData from './Components/Data/orderData'

function App() {  

  // uncomment this when API has need confirmed.  

  // number HomeLogin 1-name, ReturnSelector 2-name, Conform 3-name, 

  const [ItemData, setItemData] = useState([]) 

  const [showScreen, setShowScreen] = useState('Home') 

  useEffect(() => { setShowScreen(showScreen)}, [showScreen])

  function GetItemInfo(data){      
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
