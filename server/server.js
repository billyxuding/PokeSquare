const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/routes")(app);

app.listen(8000, () => console.log("Server is locked and loaded on port 8000"));