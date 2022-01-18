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

  knex.insert(dados).into("users").then((response) => {
      console.log(response);
      response_message = `Obrigado ${name} pela mensagem.`;
      res.send(response_message);
    })
    .catch((err) => {
      console.log(err);
      response_message = `Deu não ${err} .`;
      res.send(response_message);
    });

  
});

app.put("/users/:id", (req, res) => {
  var id = req.params.id;
  var new_cpf = req.body.cpf;
  knex.update({cpf: new_cpf}).where({id : id}).table("users").then(data => {
   

    console.log(  data);
    res.send('Atualizado com sucesso')
    res.status(200)
    
  }).catch(err =>{
    console.log(err);
    res.send('falha ao atualizar')
  })

 
});
app.get("/users/:id", (req, res) => {
  var id = req.params.id;

  knex.select().where({id : id}).table("users").then(data => {
  data.forEach(dados => {
      console.log(dados.name);
      res.send(JSON.stringify(dados.cpf));
    }); 
    
  }).catch(err =>{
    console.log(err);
  })

 
});

app.listen(3000, () => {
  console.log("servidor na porta 3000");
});
