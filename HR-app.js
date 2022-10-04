const express = require('express');
const path=require('path');
const router = express.Router();;
const app = express();
const hbs = require('express-handlebars');
const UserController = require('./controller/UserController')
const route = require('./routes/index')
const db = require('./config/DB/index')
const moment= require('moment')
const methodOverride = require('method-override')

const bodyParser = require('body-parser');//importing body-parser module
app.use(bodyParser.urlencoded({extended:true}));//using body-parser
//Connect DB
db.connect()//connect to DB

app.use(express.static(path.join(__dirname, 'public')));// use static files in public folder
//Template Engine
app.engine('hbs', hbs.engine({
  defaultLayout:'main',
  extname:'hbs',
  helpers:{
    getdate: (today) => today = new Date(),
    dateconverter:(date) => date? moment(date).format('DD-MMM-YYYY') : 'N/A',
    timeconverter:(time) => time? moment(time).format('HH:mm') : 'N/A'
  }
}));
//Override method POST by PATCH in server
app.use(methodOverride('_method')) // POST from client but the server will change to PATCH
app.set('view engine', 'hbs');
//Routes
route(app)


app.listen(3000);