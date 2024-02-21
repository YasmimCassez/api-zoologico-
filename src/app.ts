import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';
import { DatabaseModel } from './model/DatabaseModel';
import { Reptil } from './model/Reptil';

const port = 3000;

const server = express();

server.use(express.json());
server.use(cors());


server.get('/', (req, res) => {
    let ave: Ave = new Ave(2, "Joaquina", 1, "Femea");
    let habitat: Habitat = new Habitat("Selva", [ave]);
    res.json(["A ave é: ", ave, "O habitat é: ", habitat]);
})

server.get('/yasmim', (req, res) => {
    res.json('Oi, eu sou a Yasmim');
});

server.post('/habitat', (req, res) => {
    const {nome, animais} = req.body;
    const habitat = new Habitat(nome,animais);
    console.log(habitat);
    res.status (200).json('Habitat criado');
});

server.post('/atracao', (req,res) => {
    const{nome, habitat} = req.body;
    const atracao = new Atracao(nome,habitat);
    console.log(atracao);
    res.status (200).json('Atracao criada');
})

server.post('/zoologico', (req,res) => {
    const {nome, atracao} = req.body;
    const zoo = new Zoologico(nome,atracao);
    console.log(zoo);
    res.status (200).json('Zoologico criado');
})
server.get('/reptil', async (req, res) => {
    const repteis = await Reptil.listarRepteis();

    res.status(200).json(repteis);
})

new DatabaseModel().testeConexao().then((resbd) => {
    if(resbd){
        server.listen(port, () => {
            console.log('Servidor está escutando no endereço http://localhost:${port}');
        })
    
    } else{
        console.log('Não foi possivel conectar ao banco de dados')
    }
});