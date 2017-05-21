import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import MessageBox from './MessageBox'
//TODO: how to set the user??

//TODO: import send message click action
//TODO: import is typing action
//TODO: add messages action


//TODO: add no user fallback

// const Cart  = ({ products, total, onCheckoutClicked }) => {
const Chatbox = ({fromUser, toUser, messages, sendMessageClick, isTyping}) => {
    // const hasProducts = products.length > 0
    const nodes = (
        messages.map(message =>
            <MessageBox
                text={message.text}
                time={message.time}
                user={message.user}
            />
        )
    )

    return (
        <div>
            <h3>Chatbox</h3>
            <div>From {fromUser}</div>
            <div>To {toUser}</div>
            <div>{nodes}</div>
            <div>TODO: isTypingAsync</div>
            <div>TODO: input field</div>
            <div>TODO: button</div>
            {/*<button onClick={onCheckoutClicked}*/}
                    {/*disabled={hasProducts ? '' : 'disabled'}>*/}
                {/*Checkout*/}
            {/*</button>*/}
        </div>
    )
}

Chatbox.propTypes = {
    fromUser: PropTypes.string,
    toUser: PropTypes.string,
}

export default Chatbox
