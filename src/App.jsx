import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CartCounter from './Components/CartCounter'
import ListManager from './Components/ListManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Zadanie 13.2</h2>
      <CartCounter />
      <h2>Zadanie 13.3</h2>
      <ListManager /> 
    </>
  )
}

export default App
