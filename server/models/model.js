const mongoose = require("mongoose");

const SomethingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [3, "name must be at least 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "type is required"],
        minlength: [3, "type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minlength: [3, "description must be at least 3 characters long"]
    }
}, { timestamps: true });

const Something = mongoose.model("something", SomethingSchema);

module.exports = Something;