const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

function showHello(request, response) {
  response.send("Hello, world");
}

function showPort() {
  console.log("Server is running in", port);
}

app.use(router.get("/hello", showHello));
app.listen(port, showPort);
