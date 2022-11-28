import sgdb from '../database/sgdb.js'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import cria_rotas from './rotas/cria-rotas.js'
import auth from './auth.js'  

await sgdb.init()

const app = express()
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(cors())


app.get('/', function (req, res) {
    res.send('🚒 Hello World')
})

app.post('/auth', auth.authentication )

cria_rotas(app,'/questoes','questions')


app.listen(3000, () => {
    console.log('🔥 estou escutando na porta 3000');
})

