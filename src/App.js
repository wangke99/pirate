import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';
import React from 'react';
import ResultList from './components/ResultList'
import axios from 'axios';

function App() {

  const data_obj = [
    {
      name: "war and peace",
      link: "wap.com",
      type: "novel"
    },
    {
      name: "odyssey",
      link: "od.com",
      type: "poem"
    }
  ]

  const searchRef = useRef(null);

  const [result, setResult] = useState([]);

  function search(e) {

    e.preventDefault();

    fetch('https://safe-pirate.wl.r.appspot.com/search?term=harry+potter&category=overall&output=json',
      {mode: 'no-cors'}
    ).then(response => response.json())
    .then(d => setResult(d));



    

    //setResult(data_obj);
  }

  function reset(e){
    e.preventDefault();
    setResult([]);
    searchRef.current.value = null;
  }

  return (
    <div className='container'>
      <div className="row">
        <form>
        <input type='text' ref={searchRef}></input>
        <button onClick={search}>Search</button>
        <button onClick={reset}>Reset</button>
        </form>
      </div>
      <ResultList resultObj={result} />
    </div>
  );
}

export default App;
