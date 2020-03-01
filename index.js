require("dotenv").config();
const express = require('express');
const app = express();

const Text = require("./models/text");

app.get('/api/texts', (__, res) => {
    Text.find({}).then(t => {
        res.json(t.map(item => item.toJSON()));
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});