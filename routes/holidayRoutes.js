const express = require('express');
const { getHolidays } = require('../controller/holidayController');

const router = express.Router();

// Ruta para obtener los feriados
router.get('/feriados', getHolidays);

module.exports = router;