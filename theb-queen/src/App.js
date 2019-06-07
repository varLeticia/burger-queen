import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "bannanaaa"
    };
  }

  render(){
    return(
        <div className="App">
          <header className="App-header">
          <input value={this.state.inputValue} onChange={(e) => console.log(e.target.value)}/>
          <Button text='clique aqui' onClick={() => {alert()}}/>
          </header>
        </div>
      );
    }
  }

export default App;
