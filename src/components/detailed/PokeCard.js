import {
    useState,
    useEffect,
} from 'react';

import axios from '../../helpers/axiosConfig';


export const PokeCard = ({ poke }) => {

    const [pokeInfo, setpokeInfo] = useState();

    useEffect(() => {
        axios.get(poke.url)
        .then(response => {
            if(response) setpokeInfo(response.data);
        })
    }, []);

    return (
        <>
            {

                pokeInfo?
                <div>
                    <img src={pokeInfo.sprites.front_default} />
                    <p>{pokeInfo.name}</p>
                </div>
                : <p>No hay info</p>

            }
        </>
    )

}