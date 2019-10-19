import React from 'react';
import './App.css';
import { getValues } from './api/api';

class App extends React.Component{
  state = {
    name : null,
    age : null,
  }
  componentDidMount(){
    getValues()
      .then(res => this.setState( { name : res.name, age : res.age}));
  }
  render(){
    const { name, age} = this.state;
    return (
      <div className="App">
        <p>Name : {name}</p>
        <p>Age : {age}</p>
      </div>
    );
  }

}

export default App;
