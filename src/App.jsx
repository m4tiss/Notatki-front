import React from 'react'
import './App.css';
import Heading from './components/Heading';
import Notes from './components/Notes';

const App = () => {
  return (
    <div className='app-section'>
      <Heading/>
      <Notes/>
    </div>
  )
}

export default App
