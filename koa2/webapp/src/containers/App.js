/* eslint-disable */
import React, {Component} from 'react';
import NavBar from '../components/NavBar/index';
import base from '../styles/base.css'

class App extends Component {
    render() {
        return (
            <div id="app">
                <NavBar/> {this.props.children}
            </div>
        );
    }
}

export default App;

