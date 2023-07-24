import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../../ErrorBoundary';
import AsyncErrorBoundary from '../../errorBoundaries/AsyncErrorBoundary';
import { InvalidPromise } from '../../components';

describe('Tests in <AsyncErrorBoundary />', () => {
    const MyComponent = ({ children }) => {
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
        const h1Tag = screen.findByRole('heading', { level: 1 });
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
        const errorTitleTag = screen.findByText('Error!');
        expect(errorTitleTag).toBeTruthy();
    });

    // test('should show AsyncErrorBoundary when an async error is thrown', () => { 
    //     render(
    //         <MyComponent>
    //             <InvalidPromise />
    //         </MyComponent>
    //     );
    //     const errorMessage = screen.findByText('Api Error');
    //     expect(errorMessage).toBeTruthy();
    // });
});