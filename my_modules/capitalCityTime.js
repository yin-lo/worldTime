// Require du module perso
const capitalCities = require('./my_modules/capitalCities');

// On importe dayjs qui nous sera utile pour
// traiter les dates et l'heure
const dayjs = require('dayjs');

require('dayjs/locale/fr');

// On importe timezone qui va nous permettre
// de gérer les décalage horaires des différentes capitales
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const advancedFormat = require('dayjs/plugin/advancedFormat');

// on a étendu daysjs avec l'un de ses plugin
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('fr');
dayjs.extend(advancedFormat);

// VERSION LONGUE
// let foundCapitalCity
// for (city of capitalCities) {
//   for (prop in city) {
//     if (prop === "name") {
//       if (city[prop].toLowerCase() === req.params.cityName.toLowerCase())
//         foundCapitalCity = city[prop]
//     }
//   }
// }

// console.log(foundCapitalCity)

// VERSION COURTE
// on filtre le tableau avec comme condition
// que le nom de la capitale corresponde a celui envoyé en paramètre,
// foundCapitalCity = capitalCities.find((city) => city.name.toLowerCase() === req.params.cityName.toLowerCase())

// const day = dayjs().tz(foundCapitalCity.tz).format(' dddd DD MMMM YYYY')
// const time = dayjs().tz(foundCapitalCity.tz).format('HH:mm')

const foundCapitalCity = (research) => {
	return capitalCities.find((city) => city.name.toLowerCase() === research.toLowerCase());
};

const getDay = (city) => {
	return dayjs().tz(city.tz).format(' dddd Do MMMM YYYY');
};

const getTime = (city) => {
	return dayjs().tz(city.tz).format('HH:mm:ss');
};

module.exports = { foundCapitalCity, getDay, getTime };
