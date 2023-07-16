import PropTypes from 'prop-types'

const Error = ({ message }) => {
    return (
        <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error!</h4>
            <p>{ message }</p>
        </div>
    )
}

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error