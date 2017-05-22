import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './styles/Chatbox.css';

console.log('ChatBox');
class Chatbox extends Component {


    constructor(props) {
        super(props);

        this.state = {
            renderedSteps: [],
        };


    }
    componentDidMount() {
        console.log('componentDidMount');
        // const chatbotContent = document.querySelector('.rsc-content');
        //
        // /* istanbul ignore next */
        // if (chatbotContent) {
        //     chatbotContent.addEventListener('DOMNodeInserted', this.onNodeInserted);
        // }
    }

    render () {
        return (
            <div className="chatbox">
                <h2>Chatbsdox</h2>
                <h5>{this.props.user}</h5>
                <div className="chatbox-message-history">

                </div>
                <div className="chatbox-input">
                    <input type="text"/>
                    <button>Send</button>
                </div>

            </div>
        );
    }
}

// const MessageBox = ({text, time, user}) => (
//     <div>
//         <div>
//             {text}
//         </div>
//         <div>
//             {time} - {user}
//         </div>
//     </div>
// )

Chatbox.propTypes = {
    user: PropTypes.string.isRequired,
    receivingUser: PropTypes.string.isRequired,
}



export default Chatbox;


////TODO: input
//TODO: message history
//TODO: typing add to queue
//TODO: subscribe async
