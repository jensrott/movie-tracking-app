import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ errorMessage }) => {
    return (
        <div>
            {errorMessage ? <p style={{ textAlign: 'center' }}>{errorMessage}</p> : null}
        </div>
    )
}

Error.propTypes = {
    errorMessage: PropTypes.string
}

export default Error
