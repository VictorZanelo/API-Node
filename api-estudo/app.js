var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const knexfile =  require('./knexfile')
const knex = require('knex')(knexfile.development)


app.use(bodyParser.json());

var dados = {
    username:'josé',
}

knex.insert(dados).into("teste").then((res) => {
    console.log(res);
}).catch( (err) => {
    console.log(err);
})


app.get('/', (req, res) => {
    console.log("chamou api home");
    res.send('pagina home');
});

app.get('/contacts', (req, res) => {
    console.log('chamou api contacts');
    res.send('pagina contacts');
});

app.get('/search', (req, res) => {
    var cpf = req.query.cpf;

    res.send(`cpf igual a ${cpf}`)
})

app.post('/contacts', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var response_message = `Obrigado ${name} pela mensagem.`;

    res.send(response_message);
})

app.post('/users/:id', (req, res) => {
    var id = req.params.id;

    res.send(`param = ${id}`);
})

app.listen(3000, () =>{
    console.log("servidor na porta 3000");
});