import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let input;

class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add Todo Item" ref={node => {input = node}}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary btn-add" onClick={event => {this.props.dispatch(addTodo(input.value)); input.value = '';}}>Add</button>
                </span>
            </div>
        )
    }
}
AddTodo = connect()(AddTodo)

export default AddTodo;
