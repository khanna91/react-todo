import React, { Component } from 'react';
import ListItem from './list-item';

class List extends Component {
    constructor(props) {
        super(props);
    }

    renderTodoItems() {
        return this.props.todos.map((todo, index) => {
            return <ListItem todo={todo}
                             key={todo.id}
                             onTodoClick={event => this.props.onTodoClick(todo.id)}
                             deleteTodo={this.props.deleteTodo}
                             />
        });
    }

    render() {
        return (
            <div className="todo-list m-t-30">
                <ul className="list-group">
                    {this.renderTodoItems()}
                </ul>
            </div>
        )
    }
}

export default List;
