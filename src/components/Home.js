import React, {useState} from 'react';
import { navigate } from '@reach/router';


function Home() {

    const [resource, setResource] = useState('people');
    const [selectedId, setSelectedId] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        //search button is a redirect to people/id or planet/id
        
        navigate(`/${resource}/${selectedId}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for: </label>
                <select onChange={ e=>setResource(e.target.value)}>
                    <option value='people'>People</option>
                    <option value='planet'>Planet</option>
                </select>
                <label>ID: </label>
                <input type='number' onChange={ e=>setSelectedId(e.target.value) } />
                <button> Search </button>
            </form>
        </div>
    )
}

export default Home
