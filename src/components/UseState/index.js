import React from "react"

const SECURITY_CODE = 'paradigma'

function UseState ({ name }) {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    console.log(value)

    React.useEffect(() => {
        console.log('Empezando Efecto')
        
        if (loading) {
            setTimeout(() => {
                console.log('Empenzando Validación')

                if (value === SECURITY_CODE) {
                    setLoading(false)
                    setError(false)
                } else {
                    setError(true)
                    setLoading(false)
                }

                console.log('Terminando Validación')
            }, 3000)
        }

        console.log('Terminando Efecto')
    }, [loading])

    return (
        <div>
            <h2>Eliminar { name }</h2>
            
            <p>Escribe el código de seguridad</p>

            { (error && !loading) && <p>Error: La cagaste</p> }
            
            { loading && <p>Loading: Está cargando, mi brother</p> }

            <input 
                placeholder="Código de Seguridad"
                value={ value }
                onChange={ (event) => {
                    setValue(event.target.value)
                } }
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