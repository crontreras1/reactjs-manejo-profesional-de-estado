import React from "react"

function UseState ({ name }) {
    const [error, setError] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        console.log('Empezando Efecto')
        
        if (loading) {
            setTimeout(() => {
                console.log('Empenzando Validación')
    
                setLoading(false)
    
                console.log('Terminando Validación')
            }, 3000)
        }

        console.log('Terminando Efecto')
    }, [loading])

    return (
        <div>
            <h2>Eliminar { name }</h2>
            
            <p>Escribe el código de seguridad</p>

            { error && <p>Error: La cagaste</p> }
            
            { loading && <p>Loading: Está cargando, mi brother</p> }

            <input 
                placeholder="Código de Seguridad"
            />

            <button 
                onClick={ () => setLoading(true) }
            > 
                Dame Click. PLEASE!!!! 
            </button>
        </div>
    )
}

export { UseState }