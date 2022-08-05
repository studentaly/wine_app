import React from 'react';
import Wine from './Wine';

function WineList({ wine, onDelete, onEdit }) {
    return (
        <table id="wine">
            <thead>
                <tr>
                    <th>Winery Name</th>
                    <th>Varietal</th>
                    <th>Vintage</th>
                    <th>Appellation</th>
                    <th>Tasting Notes</th>
                    <th>Score</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {wine.map((wine, i) => <Wine wine={wine}
                    onDelete = {onDelete}
                    onEdit = {onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default WineList;
