const {Schema, model, default: mongoose } = require('mongoose');

const RSVPSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must be a valid email address'],
    },
    attending: {
        type: Boolean,
        required: true,  
    }, 
    guests: {
        type: Number,
        min: 0,
        max: 3,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    }
});

const RSVP = model('RSVP', RSVPSchema);

module.exports = RSVP;