const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

function showWomanInfo(request, response) {
  response.json({
    name: "Laís Barreto Vieira",
    image: "https://avatars.githubusercontent.com/u/92763262?v=4",
    minibio: "Desenvolvedora Fullstack",
  });
}

function showPort() {
  console.log("Server is running in", port);
}

app.use(router.get("/woman", showWomanInfo));
app.listen(port, showPort);
