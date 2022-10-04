const { text } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empolyee = new Schema({
  employeeID:{type:Number,require:"true"},
  name: { type: String, require: "true" },
  dateofbirth : {type: Date,require:"true"},
  placeofbirth:{type:String,require:"true"},
  phoneNo:{type : Number, require:"true"},
  password: { type: String, require: "true" },
  title:{type : String,default:"Staff"},
  salaryScale:{type:Number,require:'true'},
  startDate:{type:Date,require:'true'},
  department:{type:String,require:"true"},
  annualLeave:{type:Number,require:"true"},
  WorkPlace: {
    home: { type: String, default: "Nhà" },
    company: { type: String, default: "Công ty" },
  },
  workingstatus: {
    online: {
      onlinetext: { type: String, default: "working" },
      onlinecolor: { type: String, default: "green" },
      checkinBut:{type:String}
    },
    offline: {
      offlinetext: { type: String, default: "Off-working" },
      offlinecolor: { type: String, default: "red" },
      checkoutBut:{type:String,default:'disabled'}
    },
  },
  workingtimeandday:{
      workingday:{type:Date},
      workingtime:{type:Date},
      offworking:{type:Date}
  },
  avartaimage: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg",
  },
  currenttime: { type: Date, default: Date.now },
  covidinfo:{
    covidstatus:{type:String},
    covidinfected:{type:String},
    covidvacinated:{type:String},
    coviddose1type:{type:String,},
    coviddose1takedate:{type:Date},
    coviddose2type:{type:String},
    coviddose2takedate:{type:Date},
    coviddose3type:{type:String},
    coviddose3takedate:{type:Date},
  },
  other:{
    disablestatus:{type:String}
  }
});

module.exports = mongoose.model("employee", empolyee);
