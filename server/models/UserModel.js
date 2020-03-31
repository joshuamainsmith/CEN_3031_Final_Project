/* Import mongoose and define any variables needed to create the schema */
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  role: String
}, {timestamps: true});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
module.exports = mongoose.model('User', userSchema);
