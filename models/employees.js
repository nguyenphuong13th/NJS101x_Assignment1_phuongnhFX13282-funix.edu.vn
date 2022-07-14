const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empolyee = new Schema({
    name: {type:String ,require:'true'},
    password:{type:String,require:'true'},
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

  },{
    timestamps : true, //higher 4.0
  });

  module.exports = mongoose.model('employee', empolyee);