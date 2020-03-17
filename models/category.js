const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = require('./Post');

const categorySchema = new Schema(
    {
        genre: {
            type: String,
            required: true
        },
        content: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    },
    { timestamps: true }
);

module.exports = mongoose.model('postCategory', categorySchema);