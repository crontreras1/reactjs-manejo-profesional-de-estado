import React from "react"
import { Loading } from "./Loading"

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            value: '',
            error: false,
            loading: false
        }
    }
    
    // UNSAFE_componentWillMount () {
    //     console.log('componentWillMount')
    // }

    // Ejecuta el efecto solo una única vez
    componentDidMount () {
        console.log('componentDidMount')
    }

    // Ejecuta el efecto desde la segunda vez en eadelante
    componentDidUpdate () {
        console.log('Actualización!!!!')
       
        if (this.state.loading) {
            setTimeout(() => {
                console.log('Empenzando Validación')
    
                if (this.state.value === SECURITY_CODE) {
                    this.setState({ error: false, loading: false })
                } else {
                    this.setState({ error: true, loading: false })

                }
    
                console.log('Terminando Validación')
            }, 3000)
        }
    }
    
    render () {
        return (
            <div>
                <h2>Eliminar { this.props.name }</h2>
                
                <p>Escribe el código de seguridad</p>

               { (this.state.error && !this.state.loading) && <p>Error: La cagaste</p> }

               { this.state.loading && <Loading /> }
                <input
                    placeholder="Código de Seguridad"
                    value={ this.state.value }
                    onChange={ event => {
                        this.setState({ value: event.target.value })
                    }}
                />

                <button
                    onClick={ () => this.setState({ loading: true })}    
                >
                    Clickeame, Ome!!
                </button>
            </div>
        )
    }
}

// function ClassState () {
//     return <h1>Soy el componente ClassState</h1>
// }

export { ClassState }