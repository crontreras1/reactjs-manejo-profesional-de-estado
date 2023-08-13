import React from "react"

function UseState ({ name }) {
    const [error, setError] = React.useState(true)

    return (
        <div>
            <h2>Eliminar { name }</h2>
            
            <p>Escribe el código de seguridad</p>

            { error && <p>Error: La cagaste</p> }

            <input 
                placeholder="Código de Seguridad"
            />

            <button 
                onClick={ () => setError(!error)}
            > 
                Dame Click. PLEASE!!!! 
            </button>
        </div>
    )
}

export { UseState }