'use strict'

const express = require('express')
const app = express()

app.use('/', express.static(__dirname))

app.listen(3000, _ => console.log(`Web running on http://localhost:3000`))