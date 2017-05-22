import React, {Component} from 'react';
import './styles/App.css';
import Chatbox from './Chatbox';
import ApiService from './ApiService';



console.log('App.js');
console.log(ApiService);
ApiService.populate();
// fetch('./database.json')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log('data:', data);
//     });

class App extends Component {

    constructor(props) {
        super(props)
        this.userOne = "Laura";
        this.userTwo = "Rob";
    }

    render () {
        return (
            <div className="App">
                <p className="App-intro">
                    APP HEADER
                </p>
                <div className="chatboxes-container">
                    <Chatbox user={this.userOne} receivingUser={this.userTwo}/>
                    <Chatbox user={this.userTwo} receivingUser={this.userOne}/>
                </div>

            </div>
        );
    }
}

export default App;
