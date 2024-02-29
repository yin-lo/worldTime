// module externe dayjs
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

// module externe express
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
