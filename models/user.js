const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    fullName: {
        type: String
    },
    image: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    online: {
        type: Boolean,
        default: false
    },
    wallet: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('User', userSchema);