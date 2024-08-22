const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/card/:id(\\d+)', (req, res) => {
    const id = req.params.id
    res.send(`Payment methods for card ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

modelue.exports = app