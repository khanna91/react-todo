import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add Todo Item" />
                <span className="input-group-btn">
                    <button className="btn btn-primary btn-add">Add</button>
                </span>
            </div>
        )
    }
}

export default Add;
