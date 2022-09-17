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
  WorkPlace: {
    home: { type: String, default: "Nhà" },
    company: { type: String, default: "Công ty" },
  },
  workingstatus: {
    online: {
      onlinetext: { type: String, default: "working" },
      onlinecolor: { type: String, default: "green" },
    },
    offline: {
      offlinetext: { type: String, default: "Off-working" },
      offlinecolor: { type: String, default: "red" },
    },
  },
  avartaimage: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg",
  },
  currenttime: { type: Date, default: Date.now },
  covidinfo:{
    covidstatus:{type:String},
    covidinfected:{type:String,require:"true"},
    covidvacinated:{type:String,require:"true"},
  }
});

module.exports = mongoose.model("employee", empolyee);
