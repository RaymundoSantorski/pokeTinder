import { 
    useState, 
    useEffect
} from 'react';

import axios from '../../helpers/axiosConfig';
import { PokeCard } from '../detailed/PokeCard';


export const Main = () => {

  const [pokemons, setPokemons] = useState();
  const [active, setActive] = useState(0);

  const getPokeData = ( url ) => {
    return axios.get(url)
    .then(response => response.data);
  }

  useEffect(() => {
    axios.get('/pokemon/')
    .then((response) => {
      const pokes = response.data.results;
      setPokemons(pokes);
    });
  }, []);

  const setNextPoke = () => {
    console.log(active);
    if(active < pokemons.length - 1){
      setActive(active+1);
    }
  }

  return (
    <div className='pokeGrid'>
      {
        pokemons?
        <>
          <PokeCard key={pokemons[active].name} poke={pokemons[active]} />
          <div className='buttons'>
            <button className='button' onClick={setNextPoke}>Pass</button>
            <button className='button' onClick={setNextPoke}>Match</button>
          </div>
        </>
        : <p>No hay nada que mostrar</p>
      }
    </div>
  )

  // return (
  //   <div className='pokeGrid'>
  //     {
  //       pokemons ? 
  //       pokemons.map((poke) => {
  //         return (
  //           <PokeCard key={poke.name} poke={poke} />
  //         )
  //       })
  //       : <p>No hay nada que mostrar</p>
  //     }
  //   </div>
  // )
}
