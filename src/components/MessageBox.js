import React from 'react'
import PropTypes from 'prop-types'
import '../styles/MessageBox.css';
import moment from 'moment';

const MessageBox = ({text, time, user, isYourMessage}) => (
    <div className="MessageBox" style={isYourMessage ? {backgroundColor: 'white'} : {backgroundColor: 'lightblue'}}>
        <span className="MessageBox-user"> {isYourMessage ? 'You' : user}</span>:
        <span className="MessageBox-text"> {text} </span>
        <div className="MessageBox-time">
            {moment(new Date(time)).calendar()}
        </div>

    </div>
);
MessageBox.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    isYourMessage: PropTypes.bool.isRequired
};

moment.updateLocale('en', {
    calendar: {
        lastDay: '[Yesterday] h:mm a',
        sameDay: '[Today] h:mm a',
        nextDay: '[Tomorrow] h:mm a',
        lastWeek: '[Last] dddd h:mm a',
        nextWeek: '[Next] dddd h:mm a',
        sameElse: 'L h:mm a'
    }
});

export default MessageBox
