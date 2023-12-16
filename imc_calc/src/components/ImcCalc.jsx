import { useState } from "react"
import Button from "./Button"
import "./ImcCalc.css"

const ImcCalc = () => {

    const [heigth, setHeigth] = useState("")
    const [weigth, setWeigth] = useState("")

    const clearForm = (e) => {
        e.preventDefault()
        setHeigth("")
        setWeigth("")
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
                        onChange={(e) => setHeigth(e.target.value)}
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
                        onChange={(e) => setWeigth(e.target.value)}
                        value={weigth} 
                        />
                    </div>
                </div>
                <div className="action-control">
                   <Button id="calc-btn" text="Calcular" /> 
                   <Button id="clear-btn" text="Limpar" action={clearForm}/>  
                </div>
            </form>
        </div>
    )
}

export default ImcCalc