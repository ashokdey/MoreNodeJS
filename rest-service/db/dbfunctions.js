'use strict';
const db = require('./index');

let dbFunctions = {
    getAllActors : (callback) => {
        return db.query('SELECT * FROM actors ORDER BY _id', callback)
    }, 

    getActorById : (id, callback) => {
        return db.query('SELECT * FROM actors WHERE _id = ?', [id], callback);
    },

    addActor : (actor, callback) => {
        return db.query('INSERT INTO actors SET ?', actor, callback);
    },

    updateActor : (id, actor, callback) => {
        return db.query('UPDATE actor SET actor_name = ?, actor_bio = ?, actor_img_url WHERE _id = ?', [actor.actor_name, actor.actor_bio, actor.actor_img_url, id], callback);
    },

    deleteActor : (id, callback) => {
        return db.query('DELETE FROM actors WHERE _id = ?', [id], callback);
    }
};

module.exports = dbFunctions;
