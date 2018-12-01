import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import Dummy from './dummy';

class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/dummy'> Dummy </Link>
                    <Route path='/' exact component={App}></Route>
                    <Route path='/' exact component={Dummy}></Route>
                </div>
            </Router>
        )
    }
}

export default Routing;