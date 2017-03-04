'use strict';
const http = require('http');
const express = require('express');
const actorRouter = require('./routers/actors');

const app = express();
const server = http.createServer(app);

app.use('/api', actorRouter);


server.listen(3000, () => {
    console.log('service listening to port 3000');
});