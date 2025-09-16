import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent/MyComponent'
import OtherComponent from './components/OtherComponent/OtherComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
      <p>Este paragrafo é do App.jsx</p>
      <OtherComponent />
    </>
  )
}

export default App
