const newUser = require('./user')
const sites = require('./sites')
function route (app){
    app.use('/user',newUser)
    app.use('/',sites)


}
module.exports = route ;