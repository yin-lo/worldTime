// module externe express
const express = require('express');
const app = express();
const port = 3000;

// apport du tableau
const capitalCities = require('./my_modules/capitalCities');

// module externe dayjs
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const timezone = require('dayjs/plugin/timezone');
dayjs.extend(timezone);

const locale_fr = require('dayjs/locale/fr');
dayjs.locale(locale_fr);

// route pour la page d'accueil :
app.get('/', (req, res) => {
	res.status(200);
	res.sendFile(__dirname + '/index.html');
	// ou
	// res.sendFile('index.html', {root: __dirname});
});

// route vers chaque cité :
app.get('/city/:cityName', (req, res) => {

	let foundCapitalCity
	// VERSION LONGUE
	// for (city of capitalCities) {
	//   for (prop in city) {
	//     if (prop === "name") {
	//       if (city[prop].toLowerCase() === req.params.cityName.toLowerCase())
	//         foundCapitalCity = city[prop]
	//     }
	//   }
	// }
  
	// console.log(foundCapitalCity)
  
  
	// VERSION COURTES
	// on filtre le tableau avec comme condition 
	// que le nom de la capitale corresponde a celui envoyé en paramètre, 
	foundCapitalCity = capitalCities.find((city) => city.name.toLowerCase() === req.params.cityName.toLowerCase())
  
	const day = dayjs().tz(foundCapitalCity.tz).format(' dddd DD MMMM YYYY')
	const time = dayjs().tz(foundCapitalCity.tz).format('HH:mm:ss')
	res.send(`
	  <!DOCTYPE html>
	  <html lang="en">
		  <head>
			  <meta name="viewport" content="width=device-width, initial-scale=1.0">
			  <meta http-equiv="X-UA-Compatible" content="ie=edge">
			  <title>Heure à ${foundCapitalCity.name}</title>
		  </head>
		  <body>
			  <h1>À ${foundCapitalCity.name} nous sommes le ${day} et il est ${time}</h1>
		  </body>
	  </html>
	`)
  })

// port d'écoute :
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
