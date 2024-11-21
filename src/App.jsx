import { createContext, useState } from 'react'
import './App.css'
import { Footer } from './Components/Global/Footer'
import { Header } from './Components/Global/Header'
import { Navigation } from './Components/Navigation'

export const footerContext = createContext("no context")

function App() {


  return (
    <>
      <div className="wrapper">
        <Header />
        <main className='main'>
            <Navigation />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
