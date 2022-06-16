const express = require('express')
const path=require('path')
const app = express()
const exphbs = require('express-handlebars')


app.engine('exphbs', exphbs.engine());
app.set('view engine', 'exphbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/',  (req, res)=> {
  res.render('home');
})

app.listen(3000)