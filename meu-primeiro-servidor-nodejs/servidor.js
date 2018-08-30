const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

 const app = express();
 app.use(bodyParser.json());
  


app.get("/", function (req, res) {
    res.send("Servidor rodando com ExpressJS");
});

app.post("/", function (req, res) {

    var teste = req.body;
    teste.status = 'Criado';
    teste.data = new Date;
    res.send(teste);
});

app.put("/put", function (req, res) {
    var teste = req.body;
    teste.status = 'Alterado';
    teste.data = new Date;
    res.send(teste);
});

app.patch("/patch", function (req, res) {
    var teste = req.body;
    teste.status = 'Alterado um pedaço';
    res.send(teste);
});

app.delete("/delete", function (req, res) {
    var teste = req.body;
    teste.status = '';
    teste.data = '';
    res.send(teste);
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
