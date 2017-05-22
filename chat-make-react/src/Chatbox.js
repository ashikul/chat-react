import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './styles/Chatbox.css';
import MessageBox from './MessageBox'
import ApiService from './ApiService';


console.log('ChatBox');
class Chatbox extends Component {

    constructor (props) {
        super(props);

        this.state = {
            messages: [],
            message: '',
            buttonDisabled: true,
        };
        this.handleTextChanged = this.handleTextChanged.bind(this)
        this.handleSendMessage = this.handleSendMessage.bind(this)
        this.handlePressEnter = this.handlePressEnter.bind(this)
    }

    handleSendMessage () {
        if(this.state.message !== '') {
            this.setState({message: '', buttonDisabled: true})
            console.log(this.state.message);
            //TODO: add API SERVICE HERE...
            //TODO: send this to API, add a function here
        }
    }

    handleTextChanged (evt) {
        this.setState({message: evt.target.value, buttonDisabled: false})
        //TODO: set is this typing
    }

    handlePressEnter (evt) {
        if(evt.charCode === 13) {
            this.handleSendMessage()
        }
    }

    componentDidMount () {
        console.log('componentDidMount');
        const userData = ApiService.getUsersData(this.props.user);
        console.log('userData');
        console.log(userData);

        ApiService.setUserOnline(this.props.user);
        // this.setState({
        //     messages: ApiService.getReceivingUserMessages(this.props.user, this.props.receivingUser),
        // });
        console.log('messages');
        console.log(this.state.messages);
        //TODO: get messages≈Ω


        // const chatbotContent = document.querySelector('.rsc-content');
        //
        // /* istanbul ignore next */
        // if (chatbotContent) {
        //     chatbotContent.addEventListener('DOMNodeInserted', this.onNodeInserted);
        // }
    }

    componentWillUnmount() {
        console.log('componentWillUnMount')
        ApiService.setUserOffline(this.props.user)
    }

    render () {
        return (
            <div className="chatbox">
                <h4>{this.props.user}'s Chatbox</h4>

                <div className="chatbox-message-history">
                    Message History
                    {this.state.messages.map((text, time) =>
                        <MessageBox
                            text={text}
                            time={time}
                            user="user"/>
                    )}
                </div>
                <div className="chatbox-input">
                    <div className='chat-input'>
                        <div className='chat-input-core'>
                            <div className='input-space'>
                                <input
                                    placeholder="Type a message..."
                                    value={this.state.message}
                                    onChange={this.handleTextChanged}
                                    onKeyPress={this.handlePressEnter}/>
                            </div>
                            <div className='button-space'>
                                <input
                                    type='submit'
                                    className='submit'
                                    value='Send'
                                    onClick={this.handleSendMessage}
                                    disabled={this.state.buttonDisabled}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

Chatbox.propTypes = {
    user: PropTypes.string.isRequired,
    receivingUser: PropTypes.string.isRequired,
}

export default Chatbox;

////TODO: input
//TODO: message history
//TODO: typing add to queue
//TODO: subscribe async
