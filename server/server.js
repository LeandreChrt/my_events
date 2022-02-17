const dotenv = require('dotenv');
dotenv.config({
	path: `${__dirname}/.env`
});
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
app.use(cors());
const pathToClient = __dirname + '/../client'

app.use(express.static('public'));

app.get('/api', (req, res) => {
	res.send("Bienvenue sur l'api du projet My_Events de la Team Lama")
})

app.get('/api/connect/:token?', (req, res) => {
	if (req.params.token) {
		jwt.verify(req.params.token, process.env.TOKEN_SECRET, function (err, decoded) {
			if (err) {
				res.json(err)
			}
			const token = generateAccessToken(decoded.email)
			res.json({ token: token })
		});
	} else {
		let email = req.query.email
		const token = generateAccessToken(email)
		res.json({token: token})
	}
})

app.get('*', (req, res) => {
	res.sendFile(path.resolve(pathToClient, 'public', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server is up at port ${port}`);
});

function generateAccessToken(email) {
	return jwt.sign({ email: email }, process.env.TOKEN_SECRET, { expiresIn: "60s" });
}
