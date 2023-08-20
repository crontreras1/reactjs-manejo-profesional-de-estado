import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import React from "react"

const SECURITY_CODE = 'paradigma'

function UseState ({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
    })

    // const [value, setValue] = React.useState('')
    // const [error, setError] = React.useState(false)
    // const [loading, setLoading] = React.useState(false)

    console.log(state)

    React.useEffect(() => {
        console.log('Empezando Efecto')
        
        if (state.loading) {
            setTimeout(() => {
                console.log('Empenzando Validación')

                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error:false,
                        loading: false
                    })
                    // setLoading(false)
                    // setError(false)
                } else {
                    setState({
                        ...state,
                        error: true,
                        loading: false
                    })
                    // setError(true)
                    // setLoading(false)
                }

                console.log('Terminando Validación')
            }, 3000)
        }

        console.log('Terminando Efecto')
    }, [state.loading])

    return (
        <div>
            <h2>Eliminar { name }</h2>
            
            <p>Escribe el código de seguridad</p>

            { (state.error && !state.loading) && <p>Error: La cagaste</p> }
            
            { state.loading && <p>Loading: Está cargando, mi brother</p> }

            <input 
                placeholder="Código de Seguridad"
                value={ state.value }
                onChange={ (event) => {
                    setState({
                        ...state,
                        value: event.target.value
                    })
                } }
            />

            <button 
                onClick={ () => setState({ 
                    ...state,
                    loading: true
                }) }
            > 
                Clickeame, Ome!!
            </button>
        </div>
    )
}

export { UseState }