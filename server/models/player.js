const mongoose = require('mongoose');
const Schema = mongoose.Schema;
delete mongoose.connection.models['Player'];

let PlayerSchema = new mongoose.Schema({
    playerPseudo: { type: String, maxlength: 50 },
}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);

