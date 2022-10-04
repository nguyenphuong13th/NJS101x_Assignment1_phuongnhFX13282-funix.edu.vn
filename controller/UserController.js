const employees = require('../models/employees')
const {multipleMongooseToObject} =require('../ultil/mongoose')
const moment = require('moment')
const { findOneAndUpdate, findById } = require('../models/employees')
class UserController{
    //Get/user
    index(req,res){
        res.render('user')
    }
    //[GET]/user/check in-out
    inOut(req,res,next){
        employees.find({})//Find all user in database to pass to view handlebars
        .then(employees=>{
            res.render('check-in-screen/check-in-screen',{employees:multipleMongooseToObject(employees)})
        })
        .catch(next)

    }
    //[Put]/user/check-in action
    checkinAction(req,res,next){
        employees.findById(req.body._id)
        .then(employees=>{
            employees.workingstatus.offline.offlinecolor=req.body.onlinecolor
            employees.workingstatus.offline.offlinetext=req.body.onlinetext
            employees.workingstatus.online.checkinBut = req.body.butoff
            employees.workingstatus.offline.checkoutBut = req.body.buton
            employees.workingtimeandday.workingday = req.body.workingdayandtime
            employees.workingtimeandday.workingtime = req.body.workingdayandtime
            employees.save()
            res.redirect('/user/check-in-out')

        })
        .catch(next)
    }
    //[Put]/user/check-out action
    checkoutAction(req,res,next){
        employees.findById(req.body._id)
        .then(employees=>{
            employees.workingstatus.offline.offlinecolor=req.body.offlinecolor
            employees.workingstatus.offline.offlinetext=req.body.offlinetext
            employees.workingstatus.online.checkinBut = req.body.buton
            employees.workingstatus.offline.checkoutBut = req.body.butoff
            employees.workingtimeandday.offworking = req.body.workingdayandtime
            employees.save()
            res.redirect('/user/check-in-out')

        })
        .catch(next)
    }
    //[Get]/user/personalinfo
    personalinfo(req,res,next){
        employees.find({})
        .then(employees=>{
            res.render('user-tab-view/personal-information',{employees:multipleMongooseToObject(employees)})
        })
        .catch(next)
    }
    //[Get]/user/image
    personalinfoImgChange(req,res,next){
        employees.find({})
        .then(employees=>{
        res.render('user-tab-view/personal-info-imagechange-input'
        ,{employees:multipleMongooseToObject(employees)})
        })
        .catch(next)
    }
    //[PUT]/user/image
    personalinfoImgChangeUpdate(req,res,next){
        employees.findById(req.body._id)
        .then(employees=>{
            employees.avartaimage=req.body.avartaimage
            employees.save()
            res.redirect('/user/personal-information')

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
