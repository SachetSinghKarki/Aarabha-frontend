import React from 'react'
import Navbar from './assets/Components/Navbar'
import Landingpage from './assets/Components/Landingpage'
import Landingpage2 from './assets/Components/Landingpage2'

const App = () => {
  return (
     <div className='w-full min-h-screen text-black bg-zinc-100'>
      <Navbar/>
      <Landingpage/>
      <Landingpage2/>
    </div>
  )
}

export default App