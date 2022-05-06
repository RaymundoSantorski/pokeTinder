import { 
    useState, 
    useEffect
} from 'react';

import axios from '../../helpers/axiosConfig';
import { PokeCard } from '../detailed/PokeCard';


export const Main = () => {

  const [pokemons, setPokemons] = useState();
  const [active, setActive] = useState(0);
  const [passed, setPassed] = useState([]);
  const [matched, setMatched] = useState([]);

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
    if(active < pokemons.length - 1){
      setActive(active+1);
    }
  }

  const addMatched = (pokemon) => {
    setMatched([...matched, pokemon]);
    setNextPoke();
  }

  const addPassed = (pokemon) => {
    setPassed([...passed, pokemon]);
    setNextPoke();
  }


  return (
    <div className='pokeGrid'>
      {
        pokemons?
          <>
              {
                pokemons.map((pokem, i) => {
                  const show = i === active;
                  return (
                    <>
                      <PokeCard key={pokem.name} poke={pokem} show={show} last={(active-i)===(1)} />
                    </>
                  )

                })
              }
              <div className='buttons'>
                <button 
                  className='button' 
                  onClick={() => {
                    addPassed(pokemons[active]);
                  }}
                  >Pass</button>
                <button 
                  className='button' 
                  onClick={() => {
                    addMatched(pokemons[active]);
                  }}
                  >Match</button>
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
