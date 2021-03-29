const Something = require("../models/model");

module.exports = {
    // Create
    // addSomething: (req, res) => {
    //     Something.create(req.body)
    //         .then(data => res.json({ message: "success", results: data }))
    //         .catch(err => res.json({ message: "error", errors: err.errors }));
    // },
    // Read
    // getAllSomethings: (req, res) => {
    //     Something.find()
    //         .then(data => res.json({ message: "success", results: data }))
    //         .catch(err => res.json({ message: "error", errors: err.errors }));
    // },
    // getOneSomethings: (req, res) => {
    //     Something.findById(req.params.id)
    //         .then(data => res.json({ message: "success", results: data }))
    //         .catch(err => res.json({ message: "error", errors: err.errors }));
    // },
    // Update
    // updateSomething: (req, res) => {
    //     Something.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    //         .then(data => res.json({ message: "success", results: data }))
    //         .catch(err => res.json({ message: "error", errors: err.errors }));
    // },
    // Delete
    // deleteSomething: (req, res) => {
    //     Something.findByIdAndDelete(req.params.id)
    //         .then(data => res.json({ message: "success", results: data }))
    //         .catch(err => res.json({ message: "error", errors: err.errors }));
    // }
}