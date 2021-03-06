import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className="navbar navbar-inverse">
			  	<div className="container-fluid">
			    	<div className="navbar-header">
			      		<a className="navbar-brand" href="#">
			        		<i className="fa fa-github-square fa-2x"></i>
			      		</a>
			    	</div>
			  	</div>
			</nav>
        )
    }
}

export default Header;
