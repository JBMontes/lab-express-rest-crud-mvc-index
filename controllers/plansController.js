const express = require('express');
const plans = express.Router();
const plansArray = require('../models/planModel');

plans.get('/', (req,res)=>{
    res.json(plansArray)
})

module.exports = plans