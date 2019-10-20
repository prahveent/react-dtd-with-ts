import React from 'react';
import './App.css';
import { getValues } from './api/api';
import Person from './Person.tsx'

class App extends React.Component{
  state = {
    name : null,
    age : null,
    error : null,
  }
  componentDidMount(){
    getValues()
      .then(res => this.setState( { name : res.name, age : res.age}))
      .catch(error => this.setState( { error : 'Unable to fetch' }));
  }

  render(){
    const { name, age, error} = this.state;
    return (
      <div className="App">
        <h1>Tomba World</h1>
        {error !== null ?
          <p>Error : {  error }</p>
          :
          <Person name={name} age={age}/>}
      </div>
    );
  }

}

export default App;
