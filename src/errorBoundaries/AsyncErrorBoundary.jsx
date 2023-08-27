import { useEffect } from 'react';
import Error from '../Error';
import useAsyncError from './useAsyncError';

const AsyncErrorBoundary = ({ children }) => {
    const { error, promiseRejectionHandler, resetError } = useAsyncError('');

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