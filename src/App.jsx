import './App.css'
import { Footer } from './Components/Global/Footer'
import { Header } from './Components/Global/Header'
import { Navigation } from './Components/Navigation'

function App() {
  console.log('render app')
  
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
