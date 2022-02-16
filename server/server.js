const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
app.use(cors());
const pathToClient = __dirname + '/../client'

app.use(express.static('public'));

app.get('/api', (req, res) => {
	res.send("Bienvenue sur l'api du projet My_Events de la Team Lama")
})

app.get('/api/events', (req, res) => {
	
})

app.get('*', (req, res) => {
	res.sendFile(path.resolve(pathToClient, 'public', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server is up at port ${port}`);
});