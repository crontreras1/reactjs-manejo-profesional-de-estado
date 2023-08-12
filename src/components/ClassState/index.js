import React from "react"

class ClassState extends React.Component {
    render () {
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                
                <p>Escribe el código de seguridad</p>

                <input
                    placeholder="Código de Seguridad"
                />

                <button>Comprobar</button>
            </div>
        )
    }
}

// function ClassState () {
//     return <h1>Soy el componente ClassState</h1>
// }

export { ClassState }