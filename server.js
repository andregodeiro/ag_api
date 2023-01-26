const express = require("express");
const router = require("./routers");
const db = require("./src/config/config");

const app = express();

app.use(express.json());
app.use(router);

db.sync(() => console.log(`Database connected: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Server running on port 3000"));
