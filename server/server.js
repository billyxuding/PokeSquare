const stripe = require('stripe')('sk_test_51IbJ6LBx7QZ9wBYOhCX4nGGjWZ8nPIWjftxC7qYgMgcZMiKifAiHjo7WxwusCEDGJNkxd3ojwyFPT8g43RB0iyEP00UVq3IPJp');
const express = require("express");
const app = express();
const cors = require("cors");

require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/routes")(app);

app.listen(8000, () => console.log("Server is locked and loaded on port 8000"));