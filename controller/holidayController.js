const { fetchHolidays } = require('../services/holidayService');

// Controlador para obtener los feriados
async function getHolidays(req, res) {
    try {
      const year = req.query.year || new Date().getFullYear(); // Año actual por defecto
      const holidays = await fetchHolidays(year);
      res.json(holidays);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los feriados' });
    }
  }
  
  module.exports = { getHolidays };