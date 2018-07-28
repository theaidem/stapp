import React from 'react'

const Error = props =>
    <div className="middle">Application error: {props.err || 'unknown'}</div>

export default Error
