const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Company_Employees');
        console.log('connect success')

    } catch(error){
        console.log(error);
    }
}
module.exports= {connect};