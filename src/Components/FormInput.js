import React from 'react';
import Button from './Button';

import '../styles/FormInput.css'

class TodoItem extends React.Component {
    render(){
        return(
            <form className="form-todo">
                <input type="text" className="form-input" placeholder="Input Task here..."/>
                <Button label="Add"/>
            </form>
        )
    }
}

export default TodoItem;