import './App.css'  
import './Components/HomeLogin/HomeLogin.css'
import { useState, useEffect } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';   
import ReturnsComplete from './Components/ReturnsComplete/ReturnsComplete' 

import DummyData from './Components/Data/orderData'

function App() {  
  const [orderData, setOrderData] = useState([]) 
  const [finalOrderData, setFinalOrderData] = useState([])  

  // return back to home
  const [showScreen, setShowScreen] = useState('SelectReturn') 
  
  useEffect(() => {
    setFinalOrderData(finalOrderData)
    console.log(finalOrderData)
  }, [finalOrderData]);

  function populateOrder(order){      
    console.log(order)  
    setOrderData(order)     
      setShowScreen('SelectReturn')
  }       

  function verifiedItemReturns(vaild, finishedOrder){  
    if(vaild){setShowScreen('ReturnsComplete')}   
    setFinalOrderData(finishedOrder)
  } 

  function HomePageReturn(){ setShowScreen('ReturnsComplete') }

 // finishedOrder

  return ( 
    <div className='HomeLogin'>   
      <div className="Header">
          <p className="ItemHeader">Tu Pack Returns Portal</p> 
      </div> 
      <div className="App">
        { showScreen === 'SelectReturn' ? <div className='buttonContainer'><button className='button' onClick={HomePageReturn}>Back to HomeLogin</button></div> : null} 
        { showScreen === 'Home' ? <HomeLogin getFinalisedOrder={populateOrder}/> : null }
        { showScreen === 'SelectReturn' ? <ReturnSelector loadOrder={DummyData} getVerifiedItemReturns={verifiedItemReturns}/> : null} 
        { showScreen === 'ReturnsComplete' ?  <ReturnsComplete getHomePageReturn={HomePageReturn} finalOrder={DummyData}/> : null }
      </div>
      <footer>
        <a href='https://support.tupack.co.uk/hc/en-gb'>Help and Support</a>
      </footer>
    </div>

  );
}

export default App;
