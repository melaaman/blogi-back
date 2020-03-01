const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(__result => {
        console.log("Connected to MongoDB")
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB: ", error.message);
    });


const textSchema = new mongoose.Schema({
    date: String,
    title: String,
    author: String,
    text: String,
    year: String,
    publisher: String,
    content: String,
    genre: String
});

textSchema.set("toJSON", {
    transform: (__document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("Text", textSchema);