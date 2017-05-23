import React, {Component} from 'react';
import './styles/App.css';
import Chatbox from './components/Chatbox';
import ApiService from './services/ApiService';

class App extends Component {

    constructor (props) {
        super(props);
        this.userOne = "Laura";
        this.userTwo = "Rob";
        ApiService.populateMockDatabase();
    }

    render () {
        return (
            <div className="app">
                <h2 className="app-header">
                    Chatbox Screens
                </h2>
                <div className="chatboxes-container">
                    <Chatbox user={this.userOne} receivingUser={this.userTwo}/>
                    <Chatbox user={this.userTwo} receivingUser={this.userOne}/>
                </div>

            </div>
        );
    }
}

export default App;
