const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empolyee = new Schema({
    name: {type:String ,default:'Nguyễn Văn A'},
    WorkPlace: {type:String},
    nested :{
        home:{type:String},
        company:{type:String}
    },
    status: {type:Object},
    nested:{
        online:{type:Object},
        nested:{
          text:{type:String},
          color:{type:String}
        },
        offline:{type:Object},
        nested:{
          text:{type:String},
          color:{type:String}
        },
    },
    image:{type:String},
    createAt:{type:Date,default:Date.now},//date which document crated
    updateAt:{type:Date,default:Date.now}//date which document updated
  });

  module.exports = mongoose.model('employee', empolyee);