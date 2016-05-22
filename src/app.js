import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Add from './containers/add';
import Filter from './containers/filter';
import List from './containers/list';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="app">
                <Header />
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Filter />
                            <div className="clearfix"></div>
                        <Add />
                        <div className="clearfix"></div>
                        <List />
                    </div>
                </div>
            </section>
        )
    }
}

export default App;
