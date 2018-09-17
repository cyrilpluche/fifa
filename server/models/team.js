const mongoose = require('mongoose');
const Schema = mongoose.Schema;
delete mongoose.connection.models['Team'];

let TeamSchema = new mongoose.Schema({
    teamName: { type: String, maxlength: 100 },
}, { timestamps: true });

module.exports = mongoose.model('Team', TeamSchema);
