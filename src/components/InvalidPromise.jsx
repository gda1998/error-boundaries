import { useEffect } from 'react';

const InvalidPromise = () => {
    useEffect(() => {
        const load = async() => {
            await fetch('https://invalid-link.com');
        }
        load();
    }, []);

    return <h2>InvalidPromise</h2>;
}

export default InvalidPromise