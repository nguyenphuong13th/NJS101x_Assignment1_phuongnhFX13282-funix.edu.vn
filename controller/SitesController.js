const employees = require('../models/employees')

class UserController{
    //Get/user
    Index(req,res){
        res.render('home')
    }
    //Get//Login
    Login(req,res){
        res.render('login')
    }
    //Get//Register
    Register(req,res,next){
        res.render('register')
    }
    //Post//store to add new user we shall store data added here
    Store(req,res,next){
        console.log(req.body)
        const employee = new employees(req.body)
        employee.save()
            .then (() => res.redirect ('/')) //redirect to homepage after finish adding user successfully.
            .catch((err)=> res.send(err))
    }
}

module.exports = new UserController
