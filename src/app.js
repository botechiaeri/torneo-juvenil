/***********settings****** */
// require('dotenv').config();

const express = require('express');
const path = require('path');

const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
/***********static  files***************************/
app.use(express.static(path.join(__dirname, './../public')));

/***********middlewares expreess*******/


//app.use(metricsForEntrSy);
//app.use(
//    session({
//        secret: 'myAPIAPAseccion',
//        resave: true,
//        saveUninitialized: true,
//    })

/**************APA MIDDLEWARES***************/


/**************require routes***************/
const playersRouters = require("./routes/players.js")

/**************define end points***************/
app.use('/', playersRouters)
    /***********Server listen 3030****** */
app.listen(process.env.PORT || 8080, () => {
    console.log('WS LEVANTADO Y CORRIENDO EN 8080');
});

module.exports = app;