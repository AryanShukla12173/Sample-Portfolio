import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
