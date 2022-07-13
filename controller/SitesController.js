class UserController{
    //Get/user
    index(req,res){
        res.render('home')
    }
    //Get//Login
    login(req,res){
        res.render('login')
    }
}

module.exports = new UserController
