import { useEffect } from 'react';

const ValidPromise = () => {
    const loader = async() => Promise.resolve('Ok');

    useEffect(() => {
        const load = async() => await loader();
        load();
    }, []);

    return <h2>ValidPromise</h2>;
}

export default ValidPromise