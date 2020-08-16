const mongoose = require('mongoose');
const Product = require('../models/post');

exports.products_get_all = (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.products_create_product = (req, res, next) => {
    const product = new Product({
        poster: req.body.poster,
        picture: req.body.picture,
        posterComment: req.body.posterComment,
    });
    product
        .save()
        .then(result => {

            res.status(201).json({
                message: 'Created product successfully',
                createdProduct: {
                    poster: result.poster,
                    picture: result.picture,
                    posterComment: result.posterComment,
                    _id: result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

}

exports.products_get_product = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .select('poster picture posterComment likes comments _id')
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    post: doc
                });
            } else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.products_delete_product = (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Post deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}