const mongoose = require("mongoose");
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const db = mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.seppuws.mongodb.net/?retryWrites=true&w=majority`);

module.exports = db;