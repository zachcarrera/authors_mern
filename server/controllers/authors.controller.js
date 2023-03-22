const { Author } = require("../models/authors.model");

const createAuthor = (req, res) => {
    console.log("controller: createAuthor", req.body);
    Author.create(req.body)
        .then((newlyCreatedAuthor) => {
            res.json({ author: newlyCreatedAuthor });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const getAllAuthors = (req, res) => {
    console.log("controller: getAllAuthors");
    Author.find({})
        .then((allAuthors) => {
            res.json({ authors: allAuthors });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const getOneAuthor = (req, res) => {
    console.log("controller: getOneAuthor", req.params);
    Author.findOne({ _id: req.params._id })
        .then((oneAuthor) => {
            res.json({ author: oneAuthor });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const updateAuthor = (req, res) => {
    console.log("controller: updateAuthor", req.params, req.body);
    Author.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedAuthor) => {
            res.json({ author: updatedAuthor });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const deleteAuthor = (req, res) => {
    console.log("controller: deleteAuthor", req.params);
    Author.deleteOne({ _id: req.params._id })
        .then((result) => {
            res.json({ dbResponse: result });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

module.exports = {
    createAuthor,
    getAllAuthors,
    getOneAuthor,
    updateAuthor,
    deleteAuthor,
};
