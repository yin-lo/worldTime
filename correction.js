// module externe express
const express = require('express');

// apport de l'autre fichier
const { foundCapitalCity, getDay, getTime } = require('./my_modules/capitalCityTime');

const app = express();
const port = 3000;
// route pour la page d'accueil :
app.get('/', (req, res) => {
	res.status(200);
	res.sendFile(__dirname + '/index.html');
	// ou
	// res.sendFile('index.html', {root: __dirname});
});

// route vers chaque cité :
app.get('/city/:cityName', (req, res) => {
	const foundedCity = foundCapitalCity(req.params.cityName);

	const day = getDay(foundedCity);

	const time = getTime(foundedCity);

	res.send(`
	  <!DOCTYPE html>
	  <html lang="en">
		  <head>
			  <meta name="viewport" content="width=device-width, initial-scale=1.0">
			  <meta http-equiv="X-UA-Compatible" content="ie=edge">
			  <title>Heure à ${foundedCity.name}</title>
		  </head>
		  <body>
			  <h1>À ${foundedCity.name} nous sommes le ${day} et il est ${time}</h1>
		  </body>
	  </html>
	`);
});

// port d'écoute :
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
