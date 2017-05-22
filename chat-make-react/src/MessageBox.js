import React from 'react'
import PropTypes from 'prop-types'

const MessageBox = ({text, time, user}) => (
    <div>...
        <div>
            {text}
        </div>
        <div>
            {time} - {user}
        </div>
    </div>
)

MessageBox.propTypes = {
    text: PropTypes.string,
    time: PropTypes.string,
    user: PropTypes.string
}

export default MessageBox
