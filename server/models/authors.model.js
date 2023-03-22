const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is a required field."],
            minlength: [3, "Name must be atleast 3 characters."],
        },
    },
    { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = { Author };
