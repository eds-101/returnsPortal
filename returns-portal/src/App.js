import './App.css'  
import { useState, useEffect } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';   
import ReturnsComplete from './Components/ReturnsComplete/ReturnsComplete'

// import DummyData from './Components/Data/orderData'

function App() {  

  // uncomment this when API has need confirmed.  

  const [ItemData, setItemData] = useState([]) 
  const [showScreen, setShowScreen] = useState('Home') 

  function GetItemInfo(data){      
    setItemData(data)     
      setShowScreen('SelectReturn')
  }       

  function verifiedItemReturns(vaild){ if(vaild){setShowScreen('ReturnsComplete')} } 

  function HomePageReturn(){ setShowScreen('Home') }

  return ( 
    <div className="App">
      { showScreen === 'Home' ? <HomeLogin GetItemArrayData={GetItemInfo}/> : null }
      { showScreen === 'SelectReturn' ? <ReturnSelector SendItemData={ItemData} getVerifiedItemReturns={verifiedItemReturns} /> : null} 
      { showScreen === 'ReturnsComplete' ?  <ReturnsComplete getHomePageReturn={HomePageReturn}/> : null }
    </div>
  );
}

export default App;
