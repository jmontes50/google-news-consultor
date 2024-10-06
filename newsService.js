require('dotenv').config();

const { google } = require('googleapis');
const customsearch = google.customsearch('v1');

const API_KEY = process.env.API_KEY;
const CX = process.env.CX;

async function searchGoogleNews(query) {
  try {
    const res = await customsearch.cse.list({
      q: query,
      cx: CX,
      auth: API_KEY,
      siteSearch: 'news.google.com',
      num: 10
    });
    // console.log("Resultados", res.data.items)
    // console.log('Metadata:', res.data.items[0].pagemap);
    return res.data.items;
  } catch (error) {
    console.error('Error en la búsqueda:', error);
  }
}

module.exports = {
  searchGoogleNews
}
