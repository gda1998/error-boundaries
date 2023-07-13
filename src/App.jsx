import ErrorBoundary from './ErrorBoundary'
import H1 from './H1'

const App = () => {
    return (
        <ErrorBoundary>
            <H1 />
        </ErrorBoundary>
    )
}

export default App