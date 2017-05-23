import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../styles/Chatbox.css';
import MessageBox from './MessageBox'
import ApiService from '../services/ApiService';

class Chatbox extends Component {

    constructor (props) {
        super(props);

        this.state = {
            messages: [],
            convoId: 0,
            message: '',
            receivingUserIsTyping: false,
            buttonDisabled: true,
        };

        this.handleTextChanged = this.handleTextChanged.bind(this);
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.handlePressEnter = this.handlePressEnter.bind(this);
        this.chatHistoryElement = {};
        this.messageArrayKey = 0;
    }

    componentDidMount () {

        ApiService.setUserOnline(this.props.user);

        let convoId = ApiService.getConvoId(this.props.user, this.props.receivingUser);
        let messages = ApiService.getMessagesForConversation(convoId);
        let receivingUserIsTyping = ApiService.getReceivingUserIsTyping(convoId, this.props.receivingUser);

        this.setState({
            convoId: convoId,
            messages: messages,
            receivingUserIsTyping: receivingUserIsTyping,
        });

        //mocks socket connection polling
        this.interval = setInterval(() => this.setState({
            time: Date.now(),
            receivingUserIsTyping: ApiService.getReceivingUserIsTyping(this.state.convoId, this.props.receivingUser)
        }), 400);
    }

    componentWillUnmount () {
        ApiService.setUserOffline(this.props.user);
        clearInterval(this.interval);
    }

    handleSendMessage () {
        if(this.state.message !== '') {
            this.setState({message: '', buttonDisabled: true});
            ApiService.pushNewMessageToConversation(this.state.convoId, this.props.user, this.state.message, new Date().toString());
            ApiService.setUserIsTyping(this.state.convoId, this.props.user, false);
            this.chatHistoryElement.scrollTop = this.chatHistoryElement.scrollHeight;
        }
    }

    handleTextChanged (evt) {
        let disableButton;
        let userIsTyping;
        if(evt.target.value !== '') {
            disableButton = false;
            userIsTyping = true;
        } else {
            disableButton = true;
            userIsTyping = false;
        }
        this.setState({message: evt.target.value, buttonDisabled: disableButton});
        ApiService.setUserIsTyping(this.state.convoId, this.props.user, userIsTyping);
    }

    handlePressEnter (evt) {
        if(evt.charCode === 13) {
            this.handleSendMessage()
        }
    }

    render () {
        return (
            <div className="chatbox">

                <h4>{this.props.user}'s Chatbox</h4>

                <div className="chatbox-message-history" ref={(div) => {
                    this.chatHistoryElement = div
                }}>
                    {this.state.messages.map((object) =>
                        <MessageBox
                            key={this.messageArrayKey++}
                            text={object.message}
                            time={object.time}
                            user={object.user}
                            isYourMessage={this.props.user === object.user}/>
                    )}
                </div>
                <div className="chatbox-input">
                    <div className="receivingUserIsTypingField">
                        {
                            this.state.receivingUserIsTyping ?
                                <div>{this.props.receivingUser} is typing...</div> : <div></div>
                        }
                    </div>

                    <div className="input-form">
                        <input
                            className='input-message'
                            placeholder="Type a message..."
                            value={this.state.message}
                            onChange={this.handleTextChanged}
                            onKeyPress={this.handlePressEnter}/>
                        <input
                            type='submit'
                            className='send-button'
                            value='Send'
                            onClick={this.handleSendMessage}
                            disabled={this.state.buttonDisabled}/>
                    </div>

                </div>

            </div>
        );
    }
}

Chatbox.propTypes = {
    user: PropTypes.string.isRequired,
    receivingUser: PropTypes.string.isRequired,
};

export default Chatbox;