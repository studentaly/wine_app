// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database wine_db in the MongoDB server running on atlas (or locally on port 27017 if path getschange path)
mongoose.connect(
    'mongodb+srv://mynameisalyssa27:YAE3sVjBoosDA4Yd@cluster0.rkufo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// mongoose.set("useCreateIndex", true);

/**
 * Define the schema with name, varietal, vintage, appellation, tasting notes, and user review score
 */
const wineSchema = mongoose.Schema({
    name: { type: String, required: true },
    varietal: { type: String, required: true },
    vintage: { type: Number, required: true },
    appellation: {type: String, required: true},
    notes: {type: String, required: true}, 
    score: {type: Number, required: true}
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Wine = mongoose.model("Wine", wineSchema);

const createWine = async(name, varietal, vintage, appellation, notes, score) => {
    const wine = new Wine({name: name, varietal: varietal, vintage: vintage, appellation: appellation, notes: notes, score: score});
    return wine.save();
}

const findWine = async (filter, projection, limit) => {
    const query = Wine.find(filter)
    .select(projection)
    .limit(limit);
    return query.exec();
}

const findWineById = async (_id) => {
    const query = Wine.findById(_id);
    return query.exec();
}

const replaceWine = async(_id, name, varietal, vintage, appellation, notes, score) => {
    const result = await Wine.replaceOne({_id:_id}, 
        {name: name, varietal: varietal, vintage: vintage, appellation: appellation, notes: notes, score: score});
        return result.modifiedCount;
}

const deleteById = async (_id) => {
    const result = await Wine.deleteOne({_id:_id});
    return result.deletedCount;
}


export {createWine, findWine, findWineById, replaceWine, deleteById};