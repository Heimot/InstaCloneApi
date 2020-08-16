const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    poster: { type: String, required: true },
    picture: { type: String, required: true },
    posterComment: { type: String, required: false },
    likes: { type: Number, required: true, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: false }]
});

module.exports = mongoose.model('Product', productSchema);