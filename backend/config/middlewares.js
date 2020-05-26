const bodyParser = require('body-parser')
const cors = require('cors')

//Consign ajuda a fazer as dependencias dentro da aplicação

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}