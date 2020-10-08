// const db = require("./models/workout.js");

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});