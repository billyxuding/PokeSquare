const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/poke_orders", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("database connection established"))
    .catch(err => console.log("something went wrong", err));