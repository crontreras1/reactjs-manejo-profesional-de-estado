import React from 'react'

const SECURITY_CODE = 'paradigma'

function UseReducer ({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    // const [value, setValue] = React.useState('')
    // const [error, setError] = React.useState(false)
    // const [loading, setLoading] = React.useState(false)

    // const onConfirm = () => {
    //     setState({
    //         ...state,
    //         error:false,
    //         loading: false,
    //         confirmed: true
    //     })
    // }
    
    // const onError = () => {
    //     setState({
    //         ...state,
    //         error: true,
    //         loading: false
    //     })
    // }
    
    // const onWrite = (newValue) => {
    //     setState({
    //         ...state,
    //         value: newValue
    //     })
    // }

    // const onCheck = () => {
    //     setState({ 
    //         ...state,
    //         loading: true
    //     }) 
    // }

    // const onDelete = () => {
    //     setState({
    //         ...state,
    //         deleted: true
    //     })
    // }

    // const onReset = () => {
    //     setState({
    //         ...state,
    //         deleted: false,
    //         confirmed: false,
    //         value: '',
    //     })
    // }

    React.useEffect(() => {
        console.log('Empezando Efecto')
        
        if (state.loading) {
            setTimeout(() => {
                console.log('Empenzando Validación')

                if (state.value === SECURITY_CODE) {
                    dispatch({
                        type: 'CONFIRM'
                    })
                    // onConfirm()
                    // setLoading(false)
                    // setError(false)
                } else {
                    dispatch({
                        type: 'ERROR'
                    })
                    // onError()
                    // setError(true)
                    // setLoading(false)
                }

                console.log('Terminando Validación')
            }, 3000)
        }

        console.log('Terminando Efecto')
    }, [state.loading])

    if (!state.deleted && !state.confirmed) {
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
                        dispatch({
                            type: 'WRITE', 
                            payload: event.target.value 
                        })
                        // onWrite(event.target.value)
                    }}
                />
    
                <button 
                    onClick={ () => 
                        dispatch({
                            type: 'CHECK'
                        })
                        // onCheck()
                    }
                > 
                    Clickeame, Ome!!
                </button>
            </div>
        )
    } else if (state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>¿Seguro que quieres eliminar el código de seguridad?</p>

                <button
                    onClick={ () => {
                        dispatch({
                            type: 'DELETE'
                        })
                        // onDelete()
                    }}
                >
                    Sí, quiero eliminarlo</button>
                <button
                    onClick={ () => {
                        dispatch({
                            type: 'RESET'
                        })
                        // onReset()
                    }}
                >
                    No, no quiero eliminarlo
                </button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>Elimianado con éxito</p>
                
                <button
                   onClick={ () => {
                        dispatch({
                            type: 'RESET'
                        })
                        // onReset()
                    }}
                >
                    Volver al inicio
                </button>
            </React.Fragment>
        )
    }
}

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const reducerObject = (state, payload) => ({
    'CONFIRM': {
        ...state,
        error:false,
        loading: false,
        confirmed: true
    },
    'ERROR': {
        ...state,
        error: true,
        loading: false
    },
    'WRITE': {
        ...state,
        value: payload
    },
    'CHECK': {
        ...state,
        loading: true
    },
    'DELETE': {
        ...state,
        deleted: true
    },
    'RESET': {
        ...state,
        deleted: false,
        confirmed: false,
        value: '',
    } 
})

const reducer = (state, action) => {
    if (reducerObject (state)[action.type]) {
        return reducerObject (state, action.payload)[action.type]
    } else {
        return state
    }
}

export { UseReducer }