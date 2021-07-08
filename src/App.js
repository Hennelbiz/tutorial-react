import React, { Component } from 'react'
import Table from './Table';
import Form from './Form';

class App extends Component {
    //Con los state la informacion puede ser guardada y modificada sin que necesariamente se agregue a la base de datos
    state = {
        characters: [
            /*{
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },*/
        ],
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {

        //Crear un array del tipo JSON para cargar los datos en lugar de hacerlo a mano en la tabla
        //Props es una manera efectiva de pasar informacion a un componente
        //En este caso el componente no puede modificar la propiedad solo es de lectura sin escritura
        /*const characters = 
        [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]*/

        const { characters } = this.state

        //El characterData es un nombre definido por el usuario no son palabras reservadas
        /*return(
            <div className="App">
                <Table characterData = {characters} /> 
            </div>
        );*/

        /*return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        );*/

        return(
            <div className = "container">
                <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}

export default App