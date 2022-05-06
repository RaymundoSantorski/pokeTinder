import {
    useState,
    useEffect,
    useRef
} from 'react';

import axios from '../../helpers/axiosConfig';
import '../css/global.css';


export const PokeCard = ({ poke, show, last }) => {

    const [pokeInfo, setpokeInfo] = useState();
    const ref = useRef();

    useEffect(() => {
        axios.get(poke.url)
        .then(response => {
            if(response) setpokeInfo(response.data);
        });
    }, []);

    useEffect(() => {
        if(show){
            setTimeout(() => {
                showElement();
            }, 920);
        }
    }, [show]);

    useEffect(() => {
        if(last){
            ref.current.classList.add('out');
            setTimeout(() => {
                ref.current.className = 'pokeCard hidden';
            }, 1000);
        }
    }, [last]);

    const showElement = (e) => {
        ref.current.classList.remove('hidden');
    }

    return (
        <>
            {
                pokeInfo && 
                    <div ref={ref} className={`pokeCard hidden`} >
                        <img 
                            src={pokeInfo.sprites.front_default} 
                            className="pokeImg"
                        />
                        <p>{pokeInfo.name}</p>
                    </div>
            }
        </>
    )

}