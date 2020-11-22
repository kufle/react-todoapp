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
    status: "",
    editData: {
      id: "",
      title: ""
    }
  }

  openModal = (status,data) => {
    this.setState({
      isModal: true,
      status: status,
      editData: data
    })
  }

  closeModal = () => {
    this.setState({
      isModal: false
    })
  }

  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  updateTitle = () => {
    const {id,title} = this.state.editData;
    const newData = {id,title};
    const newTodos = this.state.todos;
    newTodos.splice(id-1,1,newData);
    this.setState({
      todos: newTodos,
      editData: {
        id: "",
        title: ""
      },
      isModal: false,
      status: ""
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

  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id),
      editData: {
        id: "",
        title: ""
      },
      isModal: false,
      status: ""
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
              open={this.openModal}
              />
          )}
        </div>
        <div className="input-form">
          <FormInput
            add={this.addTask}/>
        </div>
        { this.state.isModal && 
          <Modal status={this.state.status}
            data={this.state.editData}
            close={this.closeModal}
            setval={this.setTitle}
            fupdate={this.updateTitle}
            fdelete={this.deleteTask}/>
        }
      </div>
    );
  }
}

export default App;
