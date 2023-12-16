import { data } from "./components/Data/data" 
import { useState } from 'react'
import ImcCalc from './components/ImcCalc'
import ImcTable from "./components/ImcTable"
import './App.css'

function App() {

  const calcImc = (e, heigth, weigth) => {
    e.preventDefault()
    
    if (!weigth || !heigth) return

    const weightFloat = +weigth.replace(",", ".")
    const heightFloat = +heigth.replace(",", ".")

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult)
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (    
      <div className='container'>
       {!imc ? (
        <ImcCalc calcImc={calcImc} />
       ): (
        <ImcTable />
       )}
      </div>
  )
}

export default App
