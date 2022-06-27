const express = require('express');
const path=require('path');
const router = express.Router();;
const app = express();
const hbs = require('express-handlebars');
const UserController = require('./controller/UserController')
const route = require('./routes/index')
app.use(express.static(path.join(__dirname, 'public')));// use static files in public folder
//Template Engine
app.engine('hbs', hbs.engine({
  defaultLayout:'main',
  extname:'hbs'
}));
app.set('view engine', 'hbs');
//Routes
route(app)


app.listen(3000);