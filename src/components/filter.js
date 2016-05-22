import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(event) {
        this.props.setFilter(event.target.value);
    }

    render() {
        return (
            <div className="panel panel-default filter m-t-20">
                <div className="panel-body">
                    <span className="m-r-20">Filter by :</span>
                    <label className="radio-inline">
                        <input type="radio" name="filter" id="showAll" value="SHOW_ALL" onChange={this.setFilter} checked={this.props.filter === 'SHOW_ALL'}/> Show All
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="filter" id="completed" value="SHOW_COMPLETED" onChange={this.setFilter} checked={this.props.filter === 'SHOW_COMPLETED'}/> Completed
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="filter" id="notCompleted" value="SHOW_ACTIVE" onChange={this.setFilter} checked={this.props.filter === 'SHOW_ACTIVE'}/> Not finished
                    </label>
                </div>
            </div>
        )
    }
}

export default Filter;
