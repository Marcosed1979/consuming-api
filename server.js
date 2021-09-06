const cors = require('cors');           // permite o consumo desta api por outro server
const express = require('express');
const app = express();
const axios = require('axios');         // para consumir de app externa

app.use(cors());                        // ativa o cors

app.get('/', async (req, res)=> {

    try {

        // consome de api externa e retorna os dados obtidos em json
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        return res.json(data);
        
    } catch (error) {

        console.error(error);
        
    }

    
});

app.listen('4567');