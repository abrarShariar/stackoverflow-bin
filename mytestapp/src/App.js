import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import catFile from "./Cats.txt";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      cat_Array: []
    }
  }
  
  
  componentWillMount() {
    fetch(catFile)
      .then(data => data.text())
      .then(allResponses => {
        let catArray = allResponses.split('\n');
        this.setState({
          cat_Array: catArray
        });
      });
  }
  
  render() {
    
    const data = this.state.cat_Array.map((data) => {
      return (
        <span>{data} <br/></span>
      )
    });
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {data}
        <div>
        </div>
      </div>
    );
  }
}

export default App;
