const mongoose = require('mongoose');
const { date } = require('zod');
const schema = mongoose.Schema;

const categorySchema = new schema({
    name: {
        type: String,
        lowercase: true,
        unique: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Category', categorySchema);