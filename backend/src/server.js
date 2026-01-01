const app = require ('./app');
require('dotenv').config();

app.listen (3333, () => console.log ('Servidor a correr na Porta: '+process.env.PORT));