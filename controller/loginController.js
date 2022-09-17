const employees = require('../models/employees')
const {multipleMongooseToObject} =require('../ultil/mongoose')
class loginController{
    //Get//Login
    Login(req,res){
        res.render('login-input-screen')
    }
    //Get/user/log-in-screen

    Update(req,res,next){
        employees.findOne({
            name:req.body.name,
            password:req.body.password
        }).lean()
        .then (employees=>{
            console.log(employees)
            res.render( ('home'),{employees,isLoggined: true}
            )})
        .catch (next)

    }

}

module.exports = new loginController
