import { 
    useResolvedPath, 
    useMatch 
} from "react-router-dom"
import { 
    useEffect, 
    useState 
} from 'react';
import axios from '../../helpers/axiosConfig';

export const Pokemon = ({ to }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const [info, setInfo] = useState()

    console.log(match.params.name);

    useEffect(() => {
        if(match) axios.get(`/pokemon/${match.params.name}`)
        .then(response => response.data)
        .then(console.log)
    }, [])

    return (
        <div>Pokemon</div>
    )
}
