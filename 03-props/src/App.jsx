import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
    <div className='parent'>
      <Card user = 'First User' description = 'Description of first card.' buttonText = 'Detail-1' />
      <Card user = 'Second User' description = 'Description of second card.' buttonText = 'Detail-2' />
      <Card user = 'Third User' description = 'Description of third card.' buttonText = 'Detail-3' />
      <Card user = 'Fourth User' description = 'Description of fourth card.' buttonText = 'Detail-4' />
    </div>
    </>
  )
}

export default App