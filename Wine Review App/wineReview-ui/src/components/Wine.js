import React from 'react';
import {GrEdit} from 'react-icons/gr'
import {AiOutlineDelete} from 'react-icons/ai'

function Wine({ wine, onDelete, onEdit }) {
    return (
        <tr>
            <td>{wine.name}</td>
            <td>{wine.varietal}</td>
            <td>{wine.vintage}</td>
            <td>{wine.appellation}</td>
            <td>{wine.notes}</td>
            <td>{wine.score}</td>
            <td><GrEdit onClick={() => onEdit(wine)}/> </td>
            <td><AiOutlineDelete onClick={()=>onDelete(wine._id)}/></td>
        </tr>
    );
}

export default Wine;