import React,{ useEffect,useState } from 'react';
import './App.css';
import Chuck from './jokerimage.jpg';
import axios from 'axios';

function App() {
   
  const [state, setState] = useState({
    joke:''
  })

  useEffect( async() => {
    fetchData();
  },[]);
  const fetchData = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random?category=celebrity')
    console.log(result.data.value);
    setState({
      ...state,
      joke: result.data.value
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="title">Chuck Norris Api</h1>
          <img src={Chuck} alt="joker"/>
        </div>
    </div>      
     <h2 className="subTitle">Here is the Joke</h2>
  <h4>{state.joke}</h4>
    </div>
  );
}

export default App;
