const express = require('express');
const FAQrouter = express.Router();
const { addFaq, getAllFaqs } = require('../Controller/FaqController');

// Admin add FAQ
FAQrouter.post('/add', addFaq);

// Public fetch all FAQs
FAQrouter.get('/all', getAllFaqs);

module.exports = FAQrouter;
