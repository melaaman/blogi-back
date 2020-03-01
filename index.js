require("dotenv").config();

const express = require('express');
const Text = require("./models/text");

const app = express();

app.get('/api/texts', (__req, res) => {
    Text.find({}).then(texts => {
        res.json(texts.map(text => text.toJSON()));
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});