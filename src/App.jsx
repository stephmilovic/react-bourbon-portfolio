import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/hello-world';
import Nav from './components/nav';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Nav />
                <HelloWorld title="Hello from React webpack!!!" />
            </div>
        );
    }
}

export default hot(module)(App);
