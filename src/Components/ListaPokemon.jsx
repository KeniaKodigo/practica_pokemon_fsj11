import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TarjetaPokemon from './TarjetaPokemon';

export default function ListaPokemon() {
    /** asignando el estado para la informacion de la api */
    const [pokemon, setPokemon] = useState([]);

    /** metodo para obtener la informacion de la api y mandarla al estado */
    const obtenerPokemones = () => {
        /**
         * recibir informacion = axios.get()
         * enviar informacion = axios.post()
         * actualizar informacion = axios.put()
         * eliminar informacion = axios.delete()
         */
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => {
            console.log(response.data.results)
            /** actualizando el estado con la informacion de los pokemones */
            setPokemon(response.data.results);
        }).catch((error) => {
            console.log(error)
        })
    }

    /** renderizando el metodo obtenerPokemones() */
    useEffect(() => {
        obtenerPokemones();
    }, [])

    console.log(pokemon)
    return (
            <div className='container'>
                <div className='row'>
                {
                    /** iterando el estado pokemon */
                    pokemon.map((propiedades, indice) => {
                        return <TarjetaPokemon key={indice} poke={propiedades} />
                    })
                }
                </div>
            </div>
    )
}
