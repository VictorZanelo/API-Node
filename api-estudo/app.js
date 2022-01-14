var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const knexfile = require("./knexfile");
const knex = require("knex")(knexfile.development);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("chamou api home");
  res.send("pagina home");
});

app.get("/contacts", (req, res) => {
  console.log("chamou api contacts");
  res.send("pagina contacts");
});

app.get("/search", (req, res) => {
  var cpf = req.query.cpf;

  res.send(`cpf igual a ${cpf}`);
});

app.post("/users", (req, res) => {
  var name = req.body.name;
  var response_message;
  var dados = {
    name: name,
    cpf: req.body.cpf,
  };

  knex
    .insert(dados)
    .into("users")
    .then((res) => {
      console.log(res);
      response_message = `Obrigado ${name} pela mensagem.`;
    })
    .catch((err) => {
      console.log(err);
      response_message = `Deu não ${err} .`;
    });

  res.send(response_message);
});

/* app.post("/users/:id", (req, res) => {
  var id = req.params.id;

  res.send(`param = ${id}`);
}); */

app.listen(3000, () => {
  console.log("servidor na porta 3000");
});
