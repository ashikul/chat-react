import React from 'react'
import PropTypes from 'prop-types'
import './styles/MessageBox.css';
import moment from 'moment';

const MessageBox = ({text, time, user, isYourMessage}) => (
    <div className="MessageBox" style={isYourMessage ? {backgroundColor: 'white'} : {backgroundColor: 'lightblue'}}>
        <span className="MessageBox-user"> {isYourMessage ? 'You' : user}</span>:
        <span className="MessageBox-text"> {text} </span>
        <div className="MessageBox-time">
            {moment(time).calendar()}
            {moment(time).format(' h:mm a')}
        </div>
    </div>
);

MessageBox.propTypes = {
    text: PropTypes.string,
    time: PropTypes.string,
    user: PropTypes.string,
    isYourMessage: PropTypes.bool
};

moment.updateLocale('en', {
    calendar: {
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        lastWeek: '[Last] dddd',
        nextWeek: '[Next] dddd',
        sameElse: 'L'
    }
});

export default MessageBox
