import { useCallback, useState } from 'react';
import PropTypes from 'prop-types'


const useAsyncError = ({ initialState }) => {
    const [error, setError] = useState(initialState);

    const promiseRejectionHandler = useCallback((e) => {
        setError(e.reason);
    }, []);

    const resetError = useCallback(() => {
        setError(initialState);
    }, []);

    return {
        error,
        promiseRejectionHandler,
        resetError,
    };
}

useAsyncError.propTypes = {
    initialState: PropTypes.any.isRequired,
}

export default useAsyncError