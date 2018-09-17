/* IMPORTS */
require('dotenv').config();


/* SET UP DB LINK */

/* VARIABLE USED */
const Player = require('../models/index').player;

module.exports = {
    create (req, res) {
        Player.create({ playerPseudo: req.body.playerPseudo })
            .then( (player) => {
                res.status(201).send(player)
            })
            .catch( (error) => {
                res.status(400).send(error);
            })
    },

    update (req, res) {
        let player = req.body.player
        Player.updateOne(
            { "_id" : player._id },
            { $set: { "playerPseudo" : player.playerPseudo } })
            .then((updatedPlayer) => {
                res.status(200).send(true)
            })
            .catch((error) => {
                console.log(error)
                res.status(500).send(false)
            })
    },

    delete (req, res) {
        Player.findOneAndDelete(req.params.playerId)
            .then((answer) => {
                res.status(200).send(true)
            })
            .catch((error) => {
                console.log(error)
                res.status(500).send(false)
            })
    },

    findAll (req, res) {
        Player.find()
            .then((players) => {
                res.status(201).send(players)
            })
            .catch( (error) => {
                res.status(400).send(error);
            })
    },

    findOne (req, res) {
        console.log(req.params.id)
        Player.findById(req.params.id)
            .then((player) => {
                res.status(201).send(player)
            })
            .catch( (error) => {
                res.status(400).send(error);
            })
    }
};