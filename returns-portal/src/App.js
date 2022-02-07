import './App.css'  
import { useState } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';  

// import DummyData from './Components/Data/orderData'

function App() {  
  const [orderData, setOrderData] = useState([]) 
  const [showScreen, setShowScreen] = useState('Home') 

  function populateOrder(order){      
    console.log(order)  
    setOrderData(order)     
      setShowScreen('SelectReturn')
  }      

  return ( 
    <div className="App">
      { showScreen === 'Home' ? <HomeLogin getFinalisedOrder={populateOrder}/> : null }
      { showScreen === 'SelectReturn' ? <ReturnSelector loadOrder={orderData}/> : null}
    </div>
  );
}

export default App;
