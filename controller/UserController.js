const employees = require('../models/employees')


class UserController{
    //Get/user
    index(req,res){
        res.render('user')
    }
    //Get/user/checkin
    checkIn(req,res){
        employees.find(function (err, employees) {
            if(!err){
                res.json(employees)
                return
            }
            res.status(400).json({erroe:'Error'})
          });

    }
    offline(req,res){
        res.render('finish')
    }
    dayOff(req,res){
        res.render('dayoff')
    }
}

module.exports = new UserController
