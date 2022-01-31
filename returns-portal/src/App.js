import './App.css'  
import { useState } from 'react'
import HomeLogin from './Components/HomeLogin/HomeLogin'; 
import ReturnSelector from './Components/ReturnSelector/ReturnSelector';

function App() {  

  const [itemData, setItemData] = useState([])

  function GetItemInfo(data){
    console.log(data)
  } 

  // set statue with array with can be populated with data

  return ( 
    <div className="App">
      {/* <HomeLogin GetItemArrayData={GetItemInfo}/>  */}
      {/* <ReturnSelector /> */}
    </div>
  );
}

export default App;
