import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

const Spinner = ({ loading }) => {
    return (
        <React.Fragment>
            <div style={{ textAlign: 'center' }}>
                {loading &&
                    <CircularProgress />
                }
            </div>
        </React.Fragment>
    )
}

Spinner.propTypes = {
    loading: PropTypes.bool
}

export default Spinner;