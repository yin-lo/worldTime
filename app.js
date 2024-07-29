// module externe express
const express = require('express');
const app = express();
const port = 3000;

const utils = require('./my_modules/capitalCities');

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

app.get('/city/:city', (req, res) => {
	const city = req.params.city;
	res.send(utils.displayDate());
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
