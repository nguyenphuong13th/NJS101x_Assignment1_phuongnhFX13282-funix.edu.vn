class UserController{
    //Get/user
    index(req,res){
        res.render('user')
    }
    //Get/user/:id
    checkIn(req,res){
        res.render('checkin')

    }
}

module.exports = new UserController
