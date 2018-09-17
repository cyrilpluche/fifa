const mongoose = require('mongoose');
const Schema = mongoose.Schema;
delete mongoose.connection.models['Match'];

let MatchSchema = new mongoose.Schema({
    player1_id: { type: String },
    player2_id: { type: String },
    score1: { type: Number },
    score2: { type: Number },
    team1_id: { type: String },
    team2_id: { type: String },
    time: { type: Number }
}, { timestamps: true });


MatchSchema.methods.toDto = function () {
    return {
        id: this._id,
        content: this.content,
        state: this.state
    }
};

module.exports = mongoose.model('Match', MatchSchema);