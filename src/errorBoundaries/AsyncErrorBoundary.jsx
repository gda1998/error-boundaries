import { useEffect } from 'react';
import { useCallback, useState } from 'react'
import Error from '../Error';

const AsyncErrorBoundary = ({ children }) => {
    const [error, setError] = useState('');

    const promiseRejectionHandler = useCallback((e) => {
        setError(e.reason);
    }, []);

    const resetError = useCallback(() => {
        setError('');
    }, []);

    useEffect(() => {
        window.addEventListener('unhandledrejection', promiseRejectionHandler);

        return () => {
            window.removeEventListener('unhandledrejection', promiseRejectionHandler);
        }
    }, []);

    return (
        error ?
        <>
            <Error message={error.toString()} />
            <button type="button" className='btn btn-outline-warning' onClick={resetError}>
                Reset
            </button>
        </>
        : children
    )
}

export default AsyncErrorBoundary