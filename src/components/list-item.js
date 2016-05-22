import React, { Component } from 'react';
import classnames from 'classnames';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    handleCheckbox(event) {
        event.preventDefault();
        this.props.onTodoClick();
    }

    render() {
        return (
            <li className="list-group-item">
                <div className={classnames('checkbox', {'checked' : this.props.todo.completed})} onClick={this.handleCheckbox.bind(this)}>
                    <label>
                        <input type="checkbox" value="" checked={this.props.todo.completed} />
                        <span className="todo-content">{this.props.todo.text}</span>
                    </label>
                </div>
                <button className="btn btn-danger btn-xs remove-todo" onClick={event => { this.props.deleteTodo(this.props.todo.id)}}>Delete</button>
            </li>
        )
    }
}

export default ListItem;
