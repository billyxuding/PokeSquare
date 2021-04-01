const Order = require("../models/model");

module.exports = {
    // Create
    newOrder: (req, res) => {
        Order.create(req.body)
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // Read
    getAllOrders: (req, res) => {
        Order.find()
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getPendingOrders: (req, res) => {
        Order.find({ pickedUp: false })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // Update
    updateOrder: (req, res) => {
        Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    }
    // Delete
    // deleteSomething: (req, res) => {
    //     Something.findByIdAndDelete(req.params.id)
    //         .then(data => res.json({ message: "success", results: data }))
    //         .catch(err => res.json({ message: "error", errors: err.errors }));
    // }
}