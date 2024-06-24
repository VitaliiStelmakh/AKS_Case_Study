const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;
const apiUrl = 'http://localhost:8080/'; 

app.use(express.static('public'));

app.get('/api-call', async (req, res) => {
    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
