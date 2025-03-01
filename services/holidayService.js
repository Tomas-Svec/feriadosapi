const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHolidays(year) {
    try {
      const url = `https://api.argentinadatos.com/v1/feriados/${year}`; // URL de la API
      const response = await axios.get(url);
  
      // La API ya devuelve los datos en formato JSON, así que no necesitamos procesarlos
      return response.data;
    } catch (error) {
      console.error('Error al obtener los feriados:', error);
      throw new Error('Error al obtener los feriados');
    }
  }
  
  module.exports = { fetchHolidays };
