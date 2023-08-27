import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../../ErrorBoundary';
import { useAsyncError } from '../../errorBoundaries';
import AsyncErrorBoundary from '../../errorBoundaries/AsyncErrorBoundary';
import { InvalidPromise } from '../../components';

jest.mock('../../errorBoundaries/useAsyncError.jsx');

describe('Tests in <AsyncErrorBoundary />', () => {
    console.log = jest.fn();
    console.error = jest.fn();

    const MyComponent = ({ children, error = '' }) => {
        useAsyncError.mockReturnValue({
            error,
            promiseRejectionHandler: jest.fn(), 
            resetError: jest.fn(),

        });

        return (
            <ErrorBoundary>
                <AsyncErrorBoundary>
                    { children }
                </AsyncErrorBoundary>
            </ErrorBoundary>
        )
    }

    test('should show the main component if not exist an error', () => { 
        render(
            <MyComponent>
                <h1>Hello World</h1>
            </MyComponent>
        );
        const h1Tag = screen.getByRole('heading', { level: 1 });
        expect(h1Tag).toBeTruthy();
    });

    test('should show ErrorBoundary component if exists a sync error', () => { 
        const InvalidComponent = () => {
            throw new Error('I am an error');
        }

        render(
            <MyComponent>
                <InvalidComponent />
            </MyComponent>
        );
        expect(screen.getByText('Error!')).toBeTruthy();
    });
    
    test('should show AsyncErrorBoundary when an async error is thrown', () => { 
        // console.warn('ENV: ', import.meta.env);
        render(
            <MyComponent error={'Api Error'}>
                <InvalidPromise />
            </MyComponent>
        );

        expect(screen.getByText('Api Error')).toBeTruthy();
    });
});