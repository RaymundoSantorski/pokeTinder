import { 
    useState, 
    useEffect
} from 'react';

import axios from '../../helpers/axiosConfig';


export const Main = () => {

  const [pokemons, setPokemons] = useState();

  const getPokeData = ( url ) => {
    axios.get(url)
    .then(response => {
      console.log(response.data);
    })
  }

  useEffect(() => {
    axios.get('/pokemon/')
    .then(response => {
      setPokemons(response.data.results);
    });
  }, [])

  return (
    <>
      {
        pokemons ? 
        pokemons.map(poke => {
          return (
            <p>{ poke.name }</p>
          )
        })
        : <p>No hay nada que mostrar</p>
      }
    </>
  )
}
