const express = require('express');
const app = express();
const { searchGoogleNews } = require('./newsService');
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.get('/api', async (req, res) => {
    try {
        const news = await searchGoogleNews(req.query.q);
        res.json({
            news: news
        })
    } catch (error) {
        console.log(error);
        res.send('Error al obtener los datos de la API');
    }
    
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});