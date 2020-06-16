require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parser application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parser application/json 
app.use(bodyParser.json());

// Config global rutas
app.use(require('./routes/index'));


//mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useUnifiedTopology: true });
//*
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;

        console.log("BD ONLINE");
    });
//*/

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})