import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen">
      <Card/>
    </div>
    </>
  )
}


export default App
