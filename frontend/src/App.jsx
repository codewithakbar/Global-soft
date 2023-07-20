import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import { Context } from './context/Context'
import Fade from 'react-reveal/Fade'



function App() {

  const [leng, setLeng] = useState('uzb')

  return (
    <>
      <Context.Provider value={{ leng, setLeng }}>
        <Fade top>
          <Navbar />
        </Fade>
        <Home />
        <Footer />
      </Context.Provider>
    </>
  )
}

export default App