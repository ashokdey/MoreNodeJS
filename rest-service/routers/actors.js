'use strict';
const express = require('express');
const actorRouter = express.Router();

const db = require('./../db');


actorRouter.route('/actors')
    .get((req, res) => {
        // fetch data from db
        let data = db.query('select * from actors', (err, result) => {
            if(err) {
                return console.log(err);
            }
            // send the data as response
            res.json(result);
        });
    })
    .post();

actorRouter.route('/actors/actorId')
    .get()
    .put()
    .delete();

module.exports = actorRouter;