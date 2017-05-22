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
            convoId: 0,
            message: '',
            receivingUserIsTyping: false,
            buttonDisabled: true,
        };

        this.handleTextChanged = this.handleTextChanged.bind(this);
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.handlePressEnter = this.handlePressEnter.bind(this);
    }

    handleSendMessage () {
        if(this.state.message !== '') {
            this.setState({message: '', buttonDisabled: true})
            ApiService.pushNewMessageToConversation(this.state.convoId, this.props.user, this.state.message, new Date().toDateString());
            ApiService.setUserIsTyping(this.state.convoId, this.props.user, false);
            console.log(this.state.message);
            //TODO: add API SERVICE HERE...
            //TODO: send this to API, add a function here
        }
    }

    handleTextChanged (evt) {
        this.setState({message: evt.target.value, buttonDisabled: false});
        ApiService.setUserIsTyping(this.state.convoId, this.props.user, true);
        // console.log(ApiService.getReceivingUserIsTyping(1, this.props.receivingUser));
        //TODO: set is this typing
    }

    handlePressEnter (evt) {
        if(evt.charCode === 13) {
            this.handleSendMessage()
        }
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
        console.log(this.state.receivingUserIsTyping);
        //TODO: this isnt working

        // console.log(this.state.convoId);
        // console.log(this.state.convoId);
        // this.setState({
        //     receivingUserIsTyping: ApiService.getReceivingUserIsTyping(this.state.convoId, this.props.receivingUser),
        // });
    }
    componentDidMount () {
        console.log('componentDidMount');
        // const userData = ApiService.getUsersData(this.props.user);
        // console.log('userData');
        // console.log(userData);

        ApiService.setUserOnline(this.props.user);
        // ApiService.getConvoId(this.props.user, this.props.receivingUser);
        let convoId = ApiService.getConvoId(this.props.user, this.props.receivingUser);
        let messages = ApiService.getMessagesForConversation(convoId);
        let receivingUserIsTyping = ApiService.getReceivingUserIsTyping(convoId, this.props.receivingUser);
        console.log('receivingUserIsTyping');
        console.log(receivingUserIsTyping);

        this.setState({
            convoId: convoId,
            messages: messages,
            receivingUserIsTyping: receivingUserIsTyping,
        });
        console.log('messages');
        console.log(messages);
        //TODO: get messages≈Ω

        //mocks Socket connection polling
        this.interval = setInterval(() => this.setState({time: Date.now()}), 1000);
        // const chatbotContent = document.querySelector('.rsc-content');
        //
        // /* istanbul ignore next */
        // if (chatbotContent) {
        //     chatbotContent.addEventListener('DOMNodeInserted', this.onNodeInserted);
        // }
    }

    componentWillUnmount () {
        console.log('componentWillUnMount');
        ApiService.setUserOffline(this.props.user);
        clearInterval(this.interval);
    }

    render () {
        return (
            <div className="chatbox">
                <h4>{this.props.user}'s Chatbox</h4>

                <div className="chatbox-message-history">
                    {this.state.messages.map((object) =>
                        <MessageBox
                            text={object.message}
                            time={object.time}
                            user={this.props.user === object.user ? 'You' : object.user}/>
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
                            testing
                            <br/>
                            {this.state.receivingUserIsTyping.toString()}
                            {this.state.convoId}
                            {this.state.buttonDisabled.toString()}
                            <br/>
                            {
                                this.state.receivingUserIsTyping ?
                                    <div>true</div> : <div>false</div>

                            }
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
