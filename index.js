//importando o express
const express = require('express');

//iniciando o projeto
const server = express()

//Função micro frame para reconher informações Json
server.use(express.json());

const crudJS = ['Scorpion','Sub-zero','Noob Saibot'];

//envia um id e retorna um ninja
server.get('/ninjas/:index', (req, res) => { 
    const { index } = req.params;    

    return res.json(crudJS[index]);
}); 

//Retorna todos os ninjas
server.get('/ninjas', (req, res) => {
    return res.json(crudJS);
});

//Cria um ninja
server.post('/ninjas', (req, res) => {
    const { name } = req.body;
    crudJS.push(name);

    return res.json(crudJS);
});

//insere um ID e atualiza um ninja 
server.put('/ninjas/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body;

    crudJS[index] = name;

    return res.json(crudJS);
});

//insere um ID e deleta um ninja
server.delete('/ninjas/:index', (req, res) => {
    const { index } = req.params
    
    crudJS.splice(index, 1);

    return res.json({ message: "FATALITY: o ninja foi finalizado" });
});

//Rodar em uma porta
server.listen(3000);