const express = require('express');
const stripe = require('stripe')('sk_test_51OHuOTKqe3iUPPvtJJBFayPKnKbFkYqgWKMK450SFzgBinayHPY4RNyvv0YM1wQG5CL5cEWaLMqA4W8ZHIifXBNU00Dj8lA2Jw');
const User = require('../models/userModel');

const router = express.Router();

router.post('/create-user', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        _id: req.body._id,
    });

    user.save((err, user) => {
        if (err) {
            res.status(400).send({ error : err});
        } else {
            res.status(200).send({ data: user});
        }
    });
});

router.post('/create-payment-intent', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // replace with the actual amount
        currency: 'usd', // replace with the actual currency
    });

    res.json({
        clientSecret: paymentIntent.client_secret,
    });
});

module.exports = router;