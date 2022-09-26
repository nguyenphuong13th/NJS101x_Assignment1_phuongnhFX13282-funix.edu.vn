const employees = require('../models/employees')
const {multipleMongooseToObject} =require('../ultil/mongoose')
const moment = require('moment')
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
    personalinfo(req,res,next){
        employees.find({})
        .then(employees=>{
            res.render('user-tab-view/personal-information',{employees:multipleMongooseToObject(employees)})
        })
        .catch(next)
    }
    dayOff(req,res){
        res.render('user-tab-view/leave-holiday')
    }
    overtimeinfo(req,res){
        res.render('user-tab-view/overtime-information')
    }
    covidinfo(req,res,next){
        employees.find({})
        .then(employees=>{
            res.render('user-tab-view/covid-information',{employees:multipleMongooseToObject(employees)})
        })
        .catch(next)
    }
}

module.exports = new UserController
