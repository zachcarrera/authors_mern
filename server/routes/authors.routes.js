const {
    createAuthor,
    getAllAuthors,
    getOneAuthor,
    updateAuthor,
    deleteAuthor,
} = require("../controllers/authors.controller");

const express = require("express");

const router = express.Router();

router.post("/new", createAuthor);
router.get("/", getAllAuthors);
router.get("/:_id", getOneAuthor);
router.put("/update/:_id", updateAuthor);
router.delete("/:_id", deleteAuthor);

module.exports = { authorsRouter: router };
