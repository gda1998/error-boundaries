import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

console.log = jest.fn();
console.error = jest.fn();

describe('Tests in <ErrorBoundary />', () => {
    test('should show the original component', () => {
        render(
            <ErrorBoundary>
                <h1>Hello World</h1>
            </ErrorBoundary>
        );

        const h1Tag = screen.findByRole('heading', { level: 1 });
        expect(h1Tag).toBeTruthy();
    });

    test('should show the Error component', () => {
        const MyComponent = () => {
            throw new Error('Bad render');
            return <h1>Hello world</h1>;
        }
        render(
            <ErrorBoundary>
                <MyComponent />
            </ErrorBoundary>
        );
        const h4Tag = screen.findByRole('heading', { level: 4 });
        expect(h4Tag).toBeTruthy();
    });
});