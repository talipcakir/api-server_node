const express = require("express");
const cors = require("cors");
const app = express();

//CORS Policies allow setting
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

//body-parser -> express v4.16+
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const db = require("./app/models");

db.sequelize.sync();

//Server Home Page
app.get("/", (req, res) => {
    res.send("Server: Work!");
});

require("./app/routes/routes")(app);

//Listen port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}/`);
});