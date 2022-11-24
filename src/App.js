import './App.css';
import React,{Suspense} from 'react';
import Navbar from './components/Navbar';
import {ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundary';
// import News from './components/News';
const News = React.lazy(()=> import("./components/News"));


function App() {
  return (
    <>
      <Navbar/>  
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=> {}}>
          <Suspense fallback={<div>Loading...</div>}>
            <News/>
          </Suspense>
      </ErrorBoundary>
      
      

      
    </>
  );
}

export default App;
