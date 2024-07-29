// // module externe dayjs
// const dayjs = require('dayjs');
// const utc = require('dayjs/plugin/utc');
// const timezone = require('dayjs/plugin/timezone');
// const locale_fr = require('dayjs/locale/fr');
// dayjs.extend(utc);
// dayjs.extend(timezone);
// dayjs.locale(locale_fr);

// const locale = require('dayjs/locale/fr');

const capitalCities = [
	{
		name: 'Paris',
		tz: 'Europe/Paris',
	},
	{
		name: 'Londres',
		tz: 'Europe/London',
	},
	{
		name: 'Washington',
		tz: 'US/Eastern',
	},
	{
		name: 'Beijing',
		tz: 'Asia/Shanghai',
	},
	{
		name: 'Moscou',
		tz: 'Europe/Moscow',
	},
];

// const utils = {	

// 	displayDate() {
// 		let html = `
//         <!DOCTYPE html>
//         <html lang="fr" dir="ltr">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>`;
//         const city = req.params.city;

//         const findTimezone = capitalCities.find((capitale) => capitale.name === `${city}`);
//         if (utils.findTimezone){

//             const timezoneCity = utils.findTimezone.tz;

//             const date = dayjs().tz(timezoneCity).format('dddd DD MMMM YYYY');

//             const hour = dayjs().tz(timezoneCity).format('HH:mm')
//             html += `<h1>À ${city}</h1>
//             <p>Nous sommes le ${date}</p>
//             <p>Il est ${hour} min</p>`

//         } else{
        
//         }

// 		// for (const city of capitalCities) {
// 		// 	if (city.name === 'Paris') {
// 		// 		html += `<h1>À ${city.name}</h1>

//         //         <p>Nous sommes le ${dayjs().tz(city.tz).format('dddd DD MMMM YYYY')}</p>

//         //         <p>Il est ${dayjs().format('HH')} h ${dayjs().format('mm')} min</p>`;
// 		// 	} else if (city.name === 'Londres') {
// 		// 		html += `<h1>À ${city.name}</h1>

//         //         <p>Nous sommes le ${dayjs().tz(city.tz).format('dddd DD MMMM YYYY')}</p>

//         //         <p>Il est ${dayjs().format('HH')} h ${dayjs().format('mm')} min</p>`;
// 		// 	} else {
// 		// 		html += ``;
// 		// 	}
// 		// }

// 		return (html += `<a href="/">Retour à l'accueil</a></body></html>`);
// 	},
// };

// On exporte notre module afin qu'il soit accessible depuis l'exterieur
module.exports = capitalCities;
