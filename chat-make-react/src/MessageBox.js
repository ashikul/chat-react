import React from 'react'
import PropTypes from 'prop-types'

const MessageBox = ({text, time, user}) => (
    <div>
        <span> {time}|{user}:</span>
        {text}
    </div>
)

MessageBox.propTypes = {
    text: PropTypes.string,
    time: PropTypes.string,
    user: PropTypes.string
};

export default MessageBox
