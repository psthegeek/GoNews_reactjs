import React from 'react'

export default function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went Wrong:</p>
      <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try Again</button> 
    </div>
  )
}

