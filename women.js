const express = require("express");
const router = express.Router();
const cors = require("cors");

const connectDatabase = require("./database");
connectDatabase();

const womanModel = require("./womanModel");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3333;

// função GET
async function showWomenInfo(request, response) {
  try {
    const womenFromDatabase = await womanModel.find();

    response.json(womenFromDatabase);
  } catch (error) {
    console.log(error);
  }
}

// função POST
async function createWoman(request, response) {
  const newWoman = new womanModel({
    name: request.body.name,
    image: request.body.image,
    minibio: request.body.minibio,
    quote: request.body.quote,
  });
  try {
    const createdWoman = await newWoman.save();
    response.status(201).json(createdWoman);
  } catch (error) {
    console.log(error);
  }
}

// função PATCH
async function changeWoman(request, response) {
  try {
    const foundWoman = await womanModel.findById(request.params.id);
    if (request.body.name) {
      foundWoman.name = request.body.name;
    }

    if (request.body.image) {
      foundWoman.image = request.body.image;
    }

    if (request.body.minibio) {
      foundWoman.minibio = request.body.minibio;
    }

    if (request.body.quote) {
      foundWoman.quote = request.body.quote;
    }

    const updatedWomanInDatabase = await foundWoman.save();
    response.json(updatedWomanInDatabase);
  } catch (error) {
    console.log(error);
  }
}

// função DELETE
async function deleteWoman(request, response) {
  try {
    await womanModel.findByIdAndDelete(request.params.id);
    response.json({ message: "woman has been deleted" });
  } catch (error) {
    console.log(error);
  }
}

app.use(router.get("/women", showWomenInfo));
app.use(router.post("/women", createWoman));
app.use(router.patch("/women/:id", changeWoman));
app.use(router.delete("/women/:id", deleteWoman));

function showPort() {
  console.log("Server is running in", port);
}

app.listen(port, showPort);
