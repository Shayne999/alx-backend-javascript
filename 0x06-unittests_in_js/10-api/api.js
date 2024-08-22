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

app.get('/available_payments', (_req, res) => {
    res.json({payment_methods: {credit_cards: true, paypal: false}});
});

app.post('/login', (req, res,) => {
    let username = '';
    if (req.body){
        username = req.body.userName
    }
    res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

modelue.exports = app