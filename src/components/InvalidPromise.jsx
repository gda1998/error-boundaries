import { useEffect } from 'react';

const InvalidPromise = () => {
    const loader = async() => Promise.reject('Api Error');

    useEffect(() => {
        const load = async() => {
            try {
                await loader();
            } catch (error) {
                throw error;
            }
        }
        load();
    }, []);

    return <h2>InvalidPromise</h2>;
}

export default InvalidPromise