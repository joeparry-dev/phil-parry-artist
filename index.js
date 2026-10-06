const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Phil Parry Artist');
});

app.listen(3000, () => {
    console.log('Phil Parry site listening on port 3000!');
});