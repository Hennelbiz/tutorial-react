import React, {Component} from 'react'

//Usando un componente de clase
//Un componente de clase debe de inclyuir render() y el return solo puede regresar un elemento padre
/*class Table extends Component
{
    render()
    {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Bouncer</td>
                    </tr>
                    <tr>
                        <td>Dee</td>
                        <td>ASpiring actress</td>
                    </tr>
                    <tr>
                        <td>Dennis</td>
                        <td>Bartender</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}*/

//Usando componentes simples (La diferencia radica en que los componentes simples no usan la palabra reservada CLASS)
const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Job
                </th>
                <th>
                    Remove
                </th>
            </tr>
        </thead>
    )
}

//En el componente simple se debe agregar el props para definirle que se ingresaran propiedades
const TableBody = (props) => {
    /*return(
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>                        
        </tbody>
    )*/
    //Aqui con todos los datos que ingresan creamos fila por fila
    //Siempre que se hagan listas en React se deben usar KEYS para identificar cada item
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key = {index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick = {() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    //Luego con las filas ya creadas simplemente lo colocamos en el body de la tabla
    return <tbody>{rows}</tbody>
}

/*class Table extends Component
{
    render(){
        //Simplemente para obtener los datos que vienen desde el DOM simplemente se crea su variable y se obtiene con this.props
        const {characterData} = this.props

        return(
            <table>
                <TableHeader/>
                <TableBody characterData = {characterData} />
            </table>
        );
    }
}*/

const Table = (props) => {
    const {characterData, removeCharacter} = props

    return(
        <table>
            <TableHeader/>
            <TableBody characterData = {characterData} removeCharacter = {removeCharacter}/>
        </table>
    )
}

export default Table