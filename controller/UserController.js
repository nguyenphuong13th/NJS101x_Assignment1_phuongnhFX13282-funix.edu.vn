const employees = require('../models/employees')
const {multipleMongooseToObject} =require('../ultil/mongoose')

class UserController{
    //Get/user
    index(req,res){
        res.render('user')
    }
    //Get/user/register
    Register(req,res,next){
        employees.find({})
        .then (employees=>{
            console.log(employees)
            res.render('registerscreen',
                {employees:multipleMongooseToObject(employees)}
            )})
        .catch (next)

    }
    inOut(req,res){
        res.render('check-in-screen/check-in-screen')
    }
    offline(req,res){
        res.render('finish')
    }
    dayOff(req,res){
        res.render('dayoff')
    }
}

module.exports = new UserController
