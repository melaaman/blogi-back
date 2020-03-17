require("dotenv").config();

const express = require('express');
const Text = require("./models/text");
const cors = require('cors')

var corsOptions = {
    origin: ['http://localhost:3000', 'https://dev.d33q3rezngv61p.amplifyapp.com', 'https://www.versusmaailma.com'],
    optionsSuccessStatus: 200
}

const app = express();

app.get('/api/texts', cors(corsOptions), (__req, res) => {
    Text.find({}).then(texts => {
        res.json(texts.map(text => text.toJSON()));
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});