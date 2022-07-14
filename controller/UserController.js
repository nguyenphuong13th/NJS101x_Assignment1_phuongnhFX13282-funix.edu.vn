const employees = require('../models/employees')
const {multipleMongooseToObject} =require('../ultil/mongoose')

class UserController{
    //Get/user
    index(req,res){
        res.render('user')
    }
    //Get/user/checkin
    checkIn(req,res,next){
        employees.find({})
        .then (employees=>{
            console.log(employees)
            res.render('checkin',
                {employees:multipleMongooseToObject(employees)}
            )})
        .catch (next)

    }

    offline(req,res){
        res.render('finish')
    }
    dayOff(req,res){
        res.render('dayoff')
    }
}

module.exports = new UserController
