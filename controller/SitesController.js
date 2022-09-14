const employees = require('../models/employees')

class sitesController{
    //Get/user
    Index(req,res){
        res.render('login-input-screen')
    }

    //Get//Register
    Register(req,res,next){
        res.render('register-input-screen')
    }
    //Post//store to add new user we shall store data added here
    Store(req,res,next){
        console.log(req.body.Covidstatus)
        const employee = new employees(req.body)
        employee.save()
            .then (() => res.redirect ('/')) //redirect to homepage after finish adding user successfully.
            .catch((err)=> res.send(err))
    }

}

module.exports = new sitesController
