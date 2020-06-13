const express = require('express');
const app = express();
const port = 8080 || procces.env.PORT;



app.use('/',express.static('Public'));


app.listen(port, () => console.log(`You got flappy bird of http://localhost:${port}}!`));