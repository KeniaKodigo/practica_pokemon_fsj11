import axios from 'axios';
import { useState, useEffect } from 'react'

/** {poke} => hace referencia a la informacion del componente ListaPokemon */
export default function TarjetaPokemon({poke}) {
    /** creando un estado para cada pokemon */
    const [personaje, setPersonaje] = useState({});

    /** metodo para obtener la url de cada pokemon */
    const pokemonByUrl = (url) =>{
        axios.get(url)
        .then((response) => {
            console.log(response.data)

            /** actualizando el estado de la informacion por cada pokemon */
            setPersonaje(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    /** renderizando el metodo pokemonByUrl() */
    useEffect(() => {
        pokemonByUrl(poke.url);
    }, [])

    console.log(personaje)
    return (
        <div className='col-md-4'>
            <div className='card mt-4'>
                <div className='card-header'>
                    <b>{personaje.name}</b>
                </div>
                <img src={personaje.sprites.front_default} alt="" />
                <div className='card-body'>
                    <p>Id: {personaje.id}</p>
                    <p>Height: {personaje.height}</p>
                    <p>Weight: {personaje.weight}</p>
                </div>
            </div>
        </div>
    )
}
