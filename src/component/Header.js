import React, {Component} from 'react';
import logo from '../logo.svg';


export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello World!</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
            </header>
        ) 
    }
}