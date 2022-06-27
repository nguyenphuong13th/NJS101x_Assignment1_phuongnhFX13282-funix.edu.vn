class UserController{
    //Get/user
    index(req,res){
        res.render('home')
    }
}

module.exports = new UserController
