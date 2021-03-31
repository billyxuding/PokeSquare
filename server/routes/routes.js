const controller = require("../controllers/controller");

module.exports = app => {
    // Create
    app.post("/api/new", controller.newOrder);
    // Read
    app.get("/api/get", controller.getAllOrders);
    // app.get("/api/:id", controller.getOneSomething);
    // Update
    // app.put("/api/:id", controller.updateSomething);
    // Delete
    // app.delete("/api/:id", controller.deleteSomething);
}