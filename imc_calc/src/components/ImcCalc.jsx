import { useState } from "react"
import Button from "./Button"
import "./ImcCalc.css"

const ImcCalc = ({calcImc}) => {

    const [heigth, setHeigth] = useState("")
    const [weigth, setWeigth] = useState("")

    const clearForm = (e) => {
        e.preventDefault()
        setHeigth("")
        setWeigth("")
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeigthChange = (e) => {

        const updatedValue = validDigits(e.target.value)

        setHeigth(updatedValue)
    }

    const handleWeigthChange = (e) => {

        const updatedValue = validDigits(e.target.value)
        
        setWeigth(updatedValue)
    }

    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        placeholder="Exemplo 1,58"
                        onChange={(e) => handleHeigthChange(e)}
                        value={heigth} 
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input 
                        type="text" 
                        name="weight" 
                        id="weight" 
                        placeholder="Exemplo 69,5"
                        onChange={(e) => handleWeigthChange(e)}
                        value={weigth} 
                        />
                    </div>
                </div>
                <div className="action-control">
                   <Button id="calc-btn" text="Calcular" action={calcImc}/> 
                   <Button id="clear-btn" text="Limpar" action={clearForm}/>  
                </div>
            </form>
        </div>
    )
}

export default ImcCalc