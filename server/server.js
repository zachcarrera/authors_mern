require("dotenv").config();

const express = require("express");
const cors = require("cors");

const port = process.env.API_PORT;

require("./config/mongoose.config");
const { authorsRouter } = require("./routes/authors.routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/authors", authorsRouter);

app.get("/api/test", (req, res) => {
    return res.json({ message: "this test is working" });
});

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
