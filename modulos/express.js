const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

// para reconhecer que sempre será usando JSON , nas requisições;
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

// MIDDLEWARE -- ? 
app.use((req,res,next) => {
    console.log(req.body)

    console.log(`Request Type : ${req.method}`);
    console.log(`Request Type:: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);

    next();
});


app.get("/views/users", async (req, res) => {
    const users = await UserModel.find({})

    res.render("index", {users});
})

// app.get("/home", (req, res) => {
//     res.contentType("application/html");
//   res.status(200).send("<h1>Hello World</h1>");
//

//  UTILIZANDO Method GET - LENDO TODOS USUARIO -
app.get("/contrato", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// LENDO USUARIOS ATRAVES DE ID

app.get("/contrato/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// utilizando method POST - CRIANDO USUARIO -

app.post("/contrato", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ATUALIZANDO UM USUARIO -
app.patch("/contrato/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETANDO USUARIO -
app.delete("/contrato/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com sucesso na porta ${port}!`));
