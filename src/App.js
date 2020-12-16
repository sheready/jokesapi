import React,{ useEffect,useState } from 'react';
import './App.css';
import Chuck from './jokerimage.jpg';


const API_URL = 'https://api.chucknorris.io/jokes/random?category=celebrity';

function App() {
   
  const [joke,setJoke] = useState('');
  
  const generateJoke = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJoke();
  },[]);
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="title">Chuck Norris Api</h1>
          <img src={Chuck} alt="joker"/>
        </div>
    </div>  
     
     
     <h3 className="subTitle">Jokes under category:Celebrity</h3>
     <p>{joke}</p>
     <button onClick={generateJoke}>Get new joke</button>
    </div>
  );
}


export default App;
