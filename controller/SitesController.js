const employees = require('../models/employees')
const bcrypt = require('bcrypt')
const {multipleMongooseToObject} =require('../ultil/mongoose')
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
    async Store(req,res,next){
        try{
            const hashedPassword = await bcrypt.hash(req.body.password,10)
            console.log(req.body)
            const employee = new employees({
                employeeID:req.body.employeeID,
                name:req.body.name,
                dateofbirth:req.body.dateofbirth,
                placeofbirth:req.body.placeofbirth,
                phone:req.body.phone,
                password:hashedPassword,
                title:req.body.title,
                salaryScale:req.body.salaryScale,
                startDate:req.body.salaryScale,
                department:req.body.department,
                annualLeave:req.body.annualLeave,
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
                    covidvacinated:req.body.covidvacinated,
                    coviddose1type:req.body.dose1type,
                    coviddose1takedate:req.body.dose1takedate,
                    coviddose2type:req.body.dose2type,
                    coviddose2takedate:req.body.dose2takedate,
                    coviddose3type:req.body.dose3type,
                    coviddose3takedate:req.body.dose3takedate,

                }

            })

            employee.save()
                .then (() => res.redirect ('/')) //redirect to homepage after finish adding user successfully.
                .catch((err)=> res.send(err))
        }catch{
            res.status(500).send()
        }

    }
    //Get//Login
    Login(req,res){
        res.render('login-input-screen')
    }

    //Get/user/log-in-screen

    AfterLogin(req,res,next){
        employees.find({})
        .then(employees=>{
            res.render('home',{employees:multipleMongooseToObject(employees)})
        })
        .catch(next)
        // console.log(employees.employeeID)
        // console.log('This is ID'+' '+ req.body.employeeID)
        // console.log('This is pass'+' '+ req.body.password)
        // employees.findOne({
        //     employeeID:req.body.employeeID
        // })
        // .then(employees=> {
        //     console.log(employees)
        //    res.render(('home'),{employees,isLoggined: true})
        //  })
        //  .catch(next)
        // try{
        //     if(bcrypt.compare(req.body.password,employee.password,function(err,result){
        //         res.render(('home'),{employee,isLoggined: true})
        //     })){

        //     }else{
        //         res.render('404')
        //     }
        // }
        // catch{
        //     res.status(500).send()
        // }

        // employees.findOne({
        //     employeeID:req.body.employeeID,
        //     password:req.body.password
        // }).lean()
        // .then(employees=> {
        //     res.render(('home'),{employees,isLoggined: true})
        // })
        // .catch(
        //     res.render('404')
        // )



        // },(error,employees)=>{
        //     console.log(employees)
        //     if(error){
        //         res.render('404')
        //     }
        //     else{
        //         res.render(('home'),{employees,isLoggined: true})
        //     }
        // })
        // if(
        //     employees.findOne({
        //         employeeID:req.body.employeeID,
        //         password:req.body.password
        //     }).lean()
        // ){
        //     console.log(employees)
        //     res.render(('home'),{employees,isLoggined: true})
        // }
        // else{
        //     res.reder(('404'))
        // }
        // employees.findOne({
        //     employeeID:req.body.employeeID,
        //     password:req.body.password
        // }).lean()
        // .then (employees=>{
        //     console.log(employees)
        //     res.render( ('home'),{employees,isLoggined: true}
        //     )})
        // .catch (next)

    }


}

module.exports = new sitesController
