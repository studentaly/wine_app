import * as wine from './wine_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

/**
 * Create a new wine review with the winery name, varietal, vintage, appellation, tasting notes, and user review score provided in the body
 */
app.post('/wine', (req, res) => {
    wine.createWine(req.body.name, req.body.varietal, req.body.vintage, req.body.appellation, req.body.notes,req.body.score)
        .then(wine => {
            res.status(201).json(wine);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        })
});




/**
 * Retrive the wine corresponding to the ID provided in the URL.
 */
app.get('/wine/:_id', (req, res) => {
    const wineId = req.params._id;
    wine.findWineById(wineId)
        .then(wine => {
            if (wine !== null) {
                res.json(wine)
            } else {
                res.status(404).json({ Error: 'Request failed' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        })

});

/**
 * Retrieve wines. 
 */
app.get('/wine', (req, res) => {
    let filter = {};

    wine.findWine(filter, '', 0)
        .then(wine => {
            res.json(wine);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        })

});

/**
 * Update the wine whose id is provided in the path parameter and set
 * its data to the values provided in the body.
 */
app.put('/wine/:_id', (req, res) => {
    wine.replaceWine(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });

});

/**
 * Delete the wine whose id is provided in the query parameters
 */
app.delete('/wine/:_id', (req, res) => {
    wine.deleteById(req.params._id)
    .then(deletedCount => {
        if (deletedCount ===1){
            res.status(204).send();
        } else {
            res.status(404).json({Error: 'Resource not found'})
        }
    })
    .catch(error => {
        console.error(error);
        res.send({error: 'Request failed'});
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});