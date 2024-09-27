const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    console.log('GET /api/beets');
const sqlQuery = `
SELECT "beet_data".id, "beet_data".ticket_number, "beet_data".longitude, "beet_data".latitude, "beet_data".temperature FROM "beet_data"
ORDER BY "ticket_number";
`

pool.query(sqlQuery)
.then((response) => {
    console.log('response.rows is:', response.rows)
    res.send(response.rows)
})
.catch((dbErr) => {
    console.log('Server Error getting Beet Data:', dbErr)
})
});


module.exports = router;