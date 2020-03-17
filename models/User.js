const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            require: true
        }
    }
);

const userSchema = mongoose.model('User', userSchema);

module.exports = userSchema;