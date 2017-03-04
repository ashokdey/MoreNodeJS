'use strict';
const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const actorRouter = require('./routers/actors');

const app = express();
const server = http.createServer(app);

// middlewares 
app.use(cors());
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.use('/api', actorRouter);


server.listen(3000, () => {
    console.log('service listening to port 3000');
});