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
  const categoryRef = useRef('overall');

  const [result, setResult] = useState([]);

  function search(e) {

    e.preventDefault();

    fetch(
      'http://127.0.0.1:5000/search?' 
      + new URLSearchParams({
        term: searchRef.current.value,
        category: categoryRef.current.value,
        output: 'json'
      }))
    .then(r => r.json())
    .then(d => setResult(d['content']));
  }

  function reset(e){
    e.preventDefault();
    setResult([]);
    searchRef.current.value = null;
    categoryRef.current.value = 'overall';
  }

  return (
    <div className='container'>
      <div className="row">
        <br></br>
        <form>
          <label for='search'>What are you looking for?</label>
        <div>
          <input type='text' 
          ref={searchRef} id='search' 
          class="form-control form-control-lg" 
          required
          ></input>
          <br></br>
        </div>
        <div class='col-3'>
          <label for="category">Category</label>
          <select id="category" name="category" ref={categoryRef} class="form-control">
            <option value="overall">Overall</option>
            <option value="book">Book</option>
            <option value="audio">Audio</option>
          </select>
        </div>
        <div>
          <br></br>
          <button onClick={search} class="btn btn-primary">Search</button>
          <button onClick={reset} class="btn">Reset</button>
        </div>
        </form>
      </div>
      <div>
        <br></br>
      <ResultList resultObj={result} />
      </div>
    </div>
  );
}

export default App;
