const express = require("express");

const path = require('path');

const app = express();

app.use(express.static("./public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./navbar/index.html"))
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>resource not found</h1>")
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})