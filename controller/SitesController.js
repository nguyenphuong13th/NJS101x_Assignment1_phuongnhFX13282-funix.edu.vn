const employees = require('../models/employees')
const bcrypt = require('bcrypt')
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
        }catch{
            res.status(500).send()
        }

    }
    //Get//Login
    Login(req,res){
        res.render('login-input-screen')
    }
    //Get/user/log-in-screen

    Update(req,res,next){
        console.log(employees.employeeID)
        console.log('This is ID'+' '+ req.body.employeeID)
        console.log('This is pass'+' '+ req.body.password)
        employees.findOne({
            employeeID:req.body.employeeID,
            password:req.body.password
        }, function (err, employee) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Result : ", employee);
            }
        });
        // .then((employee)=>{console.log (employee)})
        // .catch((e)=> console.log(e))
        // })
        // if(employee == null){
        //     return res.status(400).render('404')
        // }
        // try{
        //     if(await bcrypt.compare(req.body.password,employee.password)){
        //         res.render(('home'),{employee,isLoggined: true})
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
