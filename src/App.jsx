import './App.css'
import { Footer } from './Components/Global/Footer'
import { Header } from './Components/Global/Header'
import { Navigation } from './Components/Navigation'
import { Timer } from "./Components/Global/Timer"

function App() {
    return (
      <>
        <div className="wrapper">
          <Timer />
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
