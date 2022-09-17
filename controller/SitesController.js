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
        console.log(req.body)
        console.log(req.body.covidvacinated)
        const employee = new employees({
            employeeID:req.body.employeeID,
            name:req.body.name,
            dateofbirth:req.body.dateofbirth,
            placeofbirth:req.body.placeofbirth,
            phone:req.body.phone,
            password:req.body.password,
            title:req.body.title,
            workplace:{
                home:req.body.home,
                company:req.body.company
            },
            workingstatus:{
                online:{
                    onlinetext:req.body.onlinetext,
                    onlinecolor:req.body.onlinecolor
                },
                offline:{
                    offlinetext:req.body.offlinetext,
                    offlinecolor:req.body.offlinecolor
                }
            },
            avartaimage:req.body.avartaimage,
            currenttime:req.body.currenttime,
            covidinfo:{
                covidstatus:req.body.covidstatus,
                covidinfected:req.body.covidinfected,
                covidvacinated:req.body.covidvacinated
            }

        })
        employee.save()
            .then (() => res.redirect ('/')) //redirect to homepage after finish adding user successfully.
            .catch((err)=> res.send(err))
    }

}

module.exports = new sitesController
