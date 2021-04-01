const mongoose = require("mongoose");

const arrayLimit = val => val.length <= 3;

const OrderSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "first name is required"],
        minlength: [2, "first name must be at least 2 characters long"]
    },
    lname: {
        type: String,
        required: [true, "last name is required"],
        minlength: [2, "last name must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        minlength: [5, "email must be at least 5 characters long"]
    },
    base: {
        type: String
    },
    proteins: {
        type: [String],
        validate: [arrayLimit, "please choose between 2-3 proteins"]
    },
    sauces: {
        type: [String]
    },
    sides: {
        type: [String]
    },
    toppings: {
        type: [String]
    },
    requests: {
        type: String
    },
    pickedUp: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;