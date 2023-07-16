import ErrorBoundary from './ErrorBoundary'
import { H1 } from './components'

const App = () => {
    return (
        <ErrorBoundary>
            <H1 />
        </ErrorBoundary>
    )
}

export default App