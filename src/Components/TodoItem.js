import React from 'react';
import Button from './Button';
import '../styles/TodoItem.css';

class TodoItem extends React.Component {
    render(){
        const {data} = this.props;
        return(
            <div className="todo-items">
                <div className="title-item">
                <p>{data.title}</p>
                </div>
                <div className="button-group">
                    <Button label="Edit" variant="success"/>
                    <Button label="Delete" variant="danger"/>
                </div>
            </div>
        )
    }
}

export default TodoItem;