import React from 'react';
// import { Link } from 'react-router-dom';
import WineList from '../components/WineList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setWineToEdit}) {
    const [wine, setWine] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch (`/wine/${_id}`, {method: 'DELETE'});
        if (response.status === 204){
            const newWine = wine.filter(m => m._id !== _id);
            setWine(newWine);
        } else {
            console.error(`Failed to delete review with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = wine => {
        setWineToEdit(wine)
        history.push("/edit-wine")

    }

    const loadWine = async () => {
        const response = await fetch('/wine');
        const data = await response.json();
        setWine(data);
    }

    useEffect(()=> {
        loadWine();
    }, []);


    return (
        <>
            <h2>Your Reviews</h2>
            <WineList wine={wine} onDelete={onDelete} onEdit = {onEdit}></WineList>
        </>
    );
}

export default HomePage;