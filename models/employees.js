const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empolyee = new Schema({
    name: {type:String ,default:'Nguyễn Văn A'},
    WorkPlace: {type:String,defaul:'Công ty'},
    status: {type:String,default:'Off-working'},
    createAt:{type:Date,default:Date.now},//date which document crated
    updateAt:{type:Date,default:Date.now}//date which document updated
  });

  module.exports = mongoose.model('employee', empolyee);