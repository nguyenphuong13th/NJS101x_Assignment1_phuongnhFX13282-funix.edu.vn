const newUser = require('./user')
const sites = require('./sites')
const userLogin = require('./login')
function route (app){
    app.use('/login',userLogin)
    app.use('/user',newUser)
    app.use('/',sites)
}
module.exports = route ;