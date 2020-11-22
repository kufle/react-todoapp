import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './Components/TodoItem';
import FormInput from './Components/FormInput';
import Modal from './Components/Modal';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Reading book"
      },
      {
        id: 2,
        title: "Watch Tv"
      }
    ],
    isModal: false,
    isEdit: false,
    isDelete: false
  }

  openModal = () => {
    this.setState({
      isModal: true
    })
  }

  closeModal = () => {
    this.setState({
      isModal: false
    })
  }

  addTask = (text) => {
      const newId = this.state.todos.length;
      this.setState({
        todos:[
            ...this.state.todos,
            {id: newId+1,
             title: text 
            }
        ]
      })    
  }
  render(){
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="Logo"/>
          <h4>Task List</h4>
        </div>
        <div className="list">
          {this.state.todos.map(item=>
            <TodoItem key={item.id} 
              data={item}
              />
          )}
        </div>
        <div className="input-form">
          <FormInput
            add={this.addTask}/>
        </div>
        <Modal/>
      </div>
    );
  }
}

export default App;
