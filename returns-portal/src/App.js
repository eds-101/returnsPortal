import './App.css'  
import './Components/HomeLogin/HomeLogin.css'
import { useState, useEffect } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';   
import ReturnsComplete from './Components/ReturnsComplete/ReturnsComplete'

// import DummyData from './Components/Data/orderData'

function App() {  
  const [orderData, setOrderData] = useState([]) 
  const [finalOrderData, setFinalOrderData] = useState([]) 
  const [showScreen, setShowScreen] = useState('Home') 
  
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

  function HomePageReturn(){ setShowScreen('Home') }

 // finishedOrder

  return ( 
    <div className='HomeLogin'>   
      <div className="Header">
          <p className="ItemHeader">Tu Pack Returns Portal</p> 
          { showScreen === 'SelectReturn' ? <button onClick={HomePageReturn}>Back to HomeLogin</button> : null}
      </div> 
      <div className="App">
        { showScreen === 'Home' ? <HomeLogin getFinalisedOrder={populateOrder}/> : null }
        { showScreen === 'SelectReturn' ? <ReturnSelector loadOrder={orderData} getVerifiedItemReturns={verifiedItemReturns}/> : null} 
        { showScreen === 'ReturnsComplete' ?  <ReturnsComplete getHomePageReturn={HomePageReturn} finalOrder={finalOrderData}/> : null }
      </div>
      <footer>
        <a href='https://support.tupack.co.uk/hc/en-gb'>Help and Support</a>
      </footer>
    </div>

  );
}

export default App;
