const controller = require("../controllers/controller");

module.exports = app => {
    // Create
    app.post("/api/new", controller.newOrder);
    // Read
    app.get("/api/get/all", controller.getAllOrders);
    app.get("/api/get/pending", controller.getPendingOrders);
    // Update
    app.put("/api/:id", controller.updateOrder);
    // Delete
    // app.delete("/api/:id", controller.deleteSomething);
}