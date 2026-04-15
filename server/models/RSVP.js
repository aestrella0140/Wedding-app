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
    },
    city: {
        type: String,
    },
    state: {
        type: String, 
    },
    zip: {
        type: String,
        
        match: [/^\d{5}(-\{4})?$/, 'Must be a valid ZIP code.'],
    }
});

const RSVP = model('RSVP', RSVPSchema);

module.exports = RSVP;