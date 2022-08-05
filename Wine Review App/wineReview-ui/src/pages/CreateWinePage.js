import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import{MdOutlineSend} from 'react-icons/md';

export const CreateWinePage = () => {

    const [name, setWineName] = useState('');
    const [varietal, setVarietal] = useState('');
    const [vintage, setVintage] = useState('');
    const [appellation, setAppellation] = useState();
    const [notes, setNotes] = useState('');
    const [score, setScore] = useState('');


    const history = useHistory();

    const addWine = async () => {
        const newWine = {name, varietal, vintage, appellation, notes, score};
        const response = await fetch('/wine', 
            {method: 'POST', 
            body: JSON.stringify(newWine), 
            headers: {
                'Content-Type': 'application/json', 

            },
        });
        if(response.status === 201){
            alert("Successfully added the review!");

        } else{
            alert(`Failed to add the review, status code = ${response.status}`);
        }
        history.push("/");
    
    };

    return (
        <div>
            <h1>Add Review</h1>
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
                {/* {wine.map((wine, i) => <Wine wine={wine}
                    onDelete = {onDelete}
                    onEdit = {onEdit}
                    key={i} />)} */}
<td>
            <input
                type="text"
                placeholder="Enter winery name here"
                value={name}
                onChange={e => setWineName(e.target.value)} />
                </td>
                <td>
            <input
                type="text"
                value={varietal}
                placeholder="Enter varietal"
                onChange={e => setVarietal(e.target.value)} />
                </td>
                <td>
            <input
                type="number"
                placeholder="Enter vintage"
                value={vintage}
                onChange={e => setVintage(e.target.value)} />
                </td>
                {/* <td>
            <select name ='unit' id = 'unit' value = {unit} onChange={e => setUnits(e.target.value)}>
                <option value = "lbs">lbs</option>
                <option value = "kgs">kgs </option>
            </select>
            </td> */}
            <td>
            <input
                type="text"
                placeholder="Enter appellation"
                value={appellation}
                onChange={e => setAppellation(e.target.value)} />
                </td>
                <td>
            <input
                type="text"
                placeholder="Enter tasting notes"
                value={notes}
                onChange={e => setNotes(e.target.value)} />
                </td>
                <td>
            <input
                type="number"
                placeholder="Enter score"
                value={score}
                onChange={e => setScore(e.target.value)} />
                </td>

            </tbody>
        </table>
        <button
                onClick={addWine}
            >Submit<MdOutlineSend/></button>
        </div>
    );
}

export default CreateWinePage;