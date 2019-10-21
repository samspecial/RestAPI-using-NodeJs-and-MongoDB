const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: { type: String, Required: true },
    ingredients: { type: String, Required: true },
    instructions: { type: String, Required: true },
    difficulty: { type: Number, Required: true },
    time: { type: Number, Required: true },
}
);

module.exports = mongoose.model('Recipe', recipeSchema);
