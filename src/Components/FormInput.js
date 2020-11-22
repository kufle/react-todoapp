import React from 'react';
import Button from './Button';

import '../styles/FormInput.css'

class FormInput extends React.Component {
    state = {
        text: ""
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.text !== ""){
            this.props.add(this.state.text);
            this.setState({text: ""})
        }
    }
    render(){
        return(
            <form className="form-todo" onSubmit={this.handleSubmit}>
                <input type="text" className="form-input" placeholder="Input Task here..." onChange={this.handleChange} value={this.state.text}/>
                <Button label="Add" variant="primary"/>
            </form>
        )
    }
}

export default FormInput;