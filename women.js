const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

const women = [
  {
    name: "Laís Barreto Vieira",
    image: "https://avatars.githubusercontent.com/u/92763262?v=4",
    minibio: "Desenvolvedora Fullstack",
  },
  {
    name: "Laís Barreto Vieira",
    image: "https://avatars.githubusercontent.com/u/92763262?v=4",
    minibio: "Desenvolvedora Fullstack",
  },
  {
    name: "Laís Barreto Vieira",
    image: "https://avatars.githubusercontent.com/u/92763262?v=4",
    minibio: "Desenvolvedora Fullstack",
  },
  {
    name: "Laís Barreto Vieira",
    image: "https://avatars.githubusercontent.com/u/92763262?v=4",
    minibio: "Desenvolvedora Fullstack",
  },
];

function showWomenInfo(request, response) {
  response.json(women);
}

function showPort() {
  console.log("Server is running in", port);
}

app.use(router.get("/women", showWomenInfo));
app.listen(port, showPort);
