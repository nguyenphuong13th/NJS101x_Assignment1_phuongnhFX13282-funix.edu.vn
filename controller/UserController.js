const employees = require('../models/employees')
const {multipleMongooseToObject} =require('../ultil/mongoose')

class UserController{
    //Get/user
    index(req,res){
        res.render('user')
    }
    //Get/user/register
    // Register(req,res,next){
    //     employees.find({})
    //     .then (employees=>{
    //         console.log(employees)
    //         res.render('registerscreen',
    //             {employees:multipleMongooseToObject(employees)}
    //         )})
    //     .catch (next)

    // }
    //Find all user in database to pass to view handlebars
    inOut(req,res,next){
        employees.find({})
        .then(employees=>{
            res.render('check-in-screen/check-in-screen',{employees:multipleMongooseToObject(employees)})
        })
        .catch(next)

    }
    personalinfo(req,res){
        res.render('user-view-tab/personal-information')
    }
    dayOff(req,res){
        res.render('user-view-tab/leave-holiday')
    }
    overtimeinfo(req,res){
        res.render('user-view-tab/overtime-information')
    }
    covidinfo(req,res){
        res.render('user-view-tab/covid-information')
    }
}

module.exports = new UserController
