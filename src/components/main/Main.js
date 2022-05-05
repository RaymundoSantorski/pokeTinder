import { 
    useState, 
    useEffect
} from 'react';

import axios from '../../helpers/axiosConfig';
import { PokeCard } from '../detailed/PokeCard';


export const Main = () => {

  const [pokemons, setPokemons] = useState();

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

  return (
    <>
      {
        pokemons ? 
        pokemons.map((poke) => {
          return (
            <PokeCard key={poke.name} poke={poke} />
          )
        })
        : <p>No hay nada que mostrar</p>
      }
    </>
  )
}
