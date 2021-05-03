
const express = require("express");


const app = express();

app.use(express.static("views"));

const PORT = 4000;

const router = require("./src/index.routes");


app.use("/", router);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));