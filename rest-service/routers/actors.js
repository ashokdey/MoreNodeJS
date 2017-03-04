'use strict';
const express = require('express');
const actorRouter = express.Router();
const db = require('./../db');
const dbFunctions = require('./../db/dbfunctions');

actorRouter.route('/actors')
    .get((req, res) => {
        // fetch data from db
        let data = dbFunctions.getAllActors((err, result) => {
            if(err) {
                return console.error(err);
            }
            // send the result as json data
            res.json(result);
        });
    })
    .post((req, res) => {
        let actor = {
            actor_name : req.body.name,
            actor_bio : req.body.bio,
            actor_img_url : req.body.image
        };

        dbFunctions.addActor(actor, (err, result) => {
            if(err) {
                return console.error(err);
            }

            res.json(result);
        });
    });

actorRouter.route('/actors/:actorId')
    .get((req, res) => {
        let id = req.params.actorId;
        dbFunctions.getActorById(id, (err, result) => {
            if(err) {
                return console.err(err);
            }
            // send the actor as response
            res.json(result);
        });
    })
    .patch()
    .delete((req, res) => {
        let id = parseInt(req.params.actorId);
        dbFunctions.deleteActor(id, (err, result) => {
            if(err) {
                return console.error(err);
            }
            res.json(result);
        });
    });

module.exports = actorRouter;