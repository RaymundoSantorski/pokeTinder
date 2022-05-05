import { 
    Routes,
    Route,
    Link
 } from 'react-router-dom';
import { Pokemon } from './components/detailed/Pokemon';
import { Main } from './components/main/Main';

export const App = () => {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon/:name" element={<Pokemon to="/pokemon/:name" />} />
      </Routes>
    </div>
  );
}
