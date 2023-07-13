import React from 'react';
import Error from './Error';

class ErrorBoundary extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            hasError: false,
            message: ''
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, message: error.message }
    }

    componentDidCatch(error) {
        // You can also log the error to an error reporting service
        console.log(error);
    }

    render() {
        return this.state.hasError ? <Error message={ this.state.message } /> : this.props.children;
    }
}

export default ErrorBoundary;