import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import TemplateExpressions from './components/TemplateExpressions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SecondComponent />
      <FirstComponent />
      <TemplateExpressions />
    </>
  )
}

export default App
