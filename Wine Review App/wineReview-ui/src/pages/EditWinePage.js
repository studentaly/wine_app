import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {RiSave3Line} from 'react-icons/ri'

export const EditWinePage = ({ wineToEdit }) => {
    const [name, setName] = useState(wineToEdit.name);
    const [varietal, setVarietal] = useState(wineToEdit.varietal);
    const [vintage, setVintage] = useState(wineToEdit.vintage);
    const [appellation, setAppellation] = useState(wineToEdit.appellation);
    const [notes, setNotes] = useState(wineToEdit.notes);
    const [score, setScore] = useState(wineToEdit.score);

    const history = useHistory();

    const editWine = async () => {
        // const editedWine = { name, variety, vintage, appellation, notes, score };
        await fetch(`/wine/${wineToEdit._id}`,
            {
                method: 'PUT',
                body: JSON.stringify({name: name, varietal: varietal, vintage: vintage, appellation: appellation, notes: notes, score: score}),
                headers: {
                    'Content-Type': 'application/json',

                },
            });
        // if (response.status === 200) {
            

        // } else {
        //     alert(`Failed to edit review, status code = ${response.status}`);
        // }
        history.push("/");
        alert("Successfully edited the review!");

    };

    return (
        <div>
            <h1>Edit Review</h1>
            <table id="wine">
                <thead>
                    <tr>
                    <th>Winery Name</th>
                    <th>Varietal</th>
                    <th>Vintage</th>
                    <th>Appellation</th>
                    <th>Tasting Notes</th>
                    <th>Score</th>
                    </tr>
                </thead>
                <tbody>

                    <td>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={varietal}
                            onChange={e => setVarietal(e.target.value)} />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={vintage}
                            onChange={e => setVintage(e.target.value)} />
                    </td>
                    {/* <td>
                        <select name="unit" id="unit" value={unit} onChange={e => setUnits(e.target.value)}>
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs </option>
                        </select>
                    </td> */}
                    <td>
                        <input
                            type="text"
                            value={appellation}
                            onChange={e => setAppellation(e.target.value)} />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={notes}
                            onChange={e => setNotes(e.target.value)} />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={score}
                            onChange={e => setScore(e.target.value)} />
                    </td>
                </tbody>
            </table>
            <button
                onClick={editWine}
            >Save<RiSave3Line/></button>
        </div>
    );

}

export default EditWinePage;