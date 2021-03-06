const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;


const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('.hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));


//Route Init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});