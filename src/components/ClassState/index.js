import React from "react"

class ClassState extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            error: true
        }
    }

    render () {
        return (
            <div>
                <h2>Eliminar { this.props.name }</h2>
                
                <p>Escribe el código de seguridad</p>

               { this.state.error && <p>Error: La cagaste</p> }

                <input
                    placeholder="Código de Seguridad"
                />

                <button
                    onClick={ () => this.setState({ error: !this.state.error })}    
                >
                    Comprobar
                </button>
            </div>
        )
    }
}

// function ClassState () {
//     return <h1>Soy el componente ClassState</h1>
// }

export { ClassState }