import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import MostrarImagens from './components/MostrarImagens'
import MostrarPcTop from './components/MostrarPcTop'
import OtherComponent from '../../segundo-projeto/src/components/OtherComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Events/>
     { /*<SecondComponent />
      <FirstComponent />
      <TemplateExpressions />*/}
      <MostrarImagens />
      <MostrarPcTop />
      
    </>
  )
}

export default App
