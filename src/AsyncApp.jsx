import React from 'react'
import { AsyncErrorBoundary } from './errorBoundaries'
import { InvalidPromise, ValidPromise } from './components'

const AsyncApp = () => {
    return (
        <AsyncErrorBoundary>
            <InvalidPromise />
        </AsyncErrorBoundary>
    )
}

export default AsyncApp