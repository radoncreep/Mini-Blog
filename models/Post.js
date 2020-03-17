const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image_path: String,
        creator: {
            type: Object,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);