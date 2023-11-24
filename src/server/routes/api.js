// src/server/routes/api.js
const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
    res.send('index.html')
});

module.exports = router;