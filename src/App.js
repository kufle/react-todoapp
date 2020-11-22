import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './Components/TodoItem';
import FormInput from './Components/FormInput';

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="Logo"/>
          <h4>Task List</h4>
        </div>
        <div className="list">
          <TodoItem/>
        </div>
        <div className="input-form">
          <FormInput/>
        </div>
      </div>
    );
  }
}

export default App;
