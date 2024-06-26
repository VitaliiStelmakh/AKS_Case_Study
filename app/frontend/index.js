const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;
const apiUrl = 'http://backend-api.default.svc.cluster.local:8080/'; 

app.use(express.static('public'));

app.get('/api-call', async (req, res) => {
    try {
        const response = await axios.get(apiUrl);
        const happyNumbers = response.data["Your happy numbers are"];
        const formattedResponse = `Your happy numbers are: ${happyNumbers.join(', ')}`;
        res.json({ message: formattedResponse });
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
