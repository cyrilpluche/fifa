/* IMPORTS */
require('dotenv').config();

/* VARIABLE USED */
const Match = require('../models/index').match;

module.exports = {
    create (req, res) {
        let match = req.body.match
        console.log(match)
        Match.create({
                player1_id: match.player1_id,
                player2_id: match.player2_id,
                score1: match.score1,
                score2: match.score2,
                team1_id: match.team1_id,
                team2_id: match.team2_id,
                time: match.time
            })
            .then( (newMatch) => {
                res.status(201).send(newMatch)
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
        Match.find()
            .then((matchs) => {
                res.status(201).send(matchs)
            })
            .catch( (error) => {
                res.status(400).send(error);
            })
    }
};