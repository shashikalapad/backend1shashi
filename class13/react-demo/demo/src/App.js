
import './App.css';
import {order} from './components/order';
import axios from 'axios';
import {useEffect,useState} from "react";

function App() {
  const [orders,setOrders] =useState([]);
  useEffect(()=>{
    async function fetchData() {
  const response = await axios.get("http://localhost:5000/orders/getOrders");
  //console.log("response",response.data);
  setOrders(response.data.data);
    }
    fetchData(); 
  },[])
  return <div className="App">
  {orders.map(({custmerName,product,price})=>{
    <order custmerName={custmerName} product={product} price={price}/>
  })}
  
  </div>
     
}

export default App;
