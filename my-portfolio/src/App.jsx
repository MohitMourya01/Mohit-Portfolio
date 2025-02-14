import { useState } from 'react'
import { About,Footer,Header, Skills, Testimonial,Work } from './container'
import { Navbar } from './components'
import './constants/index'

import './App.scss'


function App() {

  return (
    <div className='app'>
       {/* <h1>hello portfolio</h1> */}
       <Navbar />
       <Header />
       <About />
       <Work />
       <Skills />
       {/* <Testimonial /> */}
       <Footer />
    </div>
  )
}

export default App
