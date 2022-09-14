const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empolyee = new Schema({
  name: { type: String, require: "true" },
  password: { type: String, require: "true" },
  title:{type : String,default:"Staff"},
  WorkPlace: {
    home: { type: String, default: "Nhà" },
    company: { type: String, default: "Công ty" },
  },
  status: {
    online: {
      text: { type: String, default: "working" },
      color: { type: String, default: "green" },
    },
    offline: {
      text: { type: String, default: "Off-working" },
      color: { type: String, default: "red" },
    },
  },
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg",
  },
  time: { type: Date, default: Date.now },
  covidstatus:{
    covidinfected:{type:String,default:"None",require:"true"},
    covidvacinated:{type:String,default:"None"},
    firstdose:{
      date:{type:Date},
      place:{type:String}
    },
    seconddose:{
      date:{type:Date},
      place:{type:String}
    },
    thirddose:{
      date:{type:Date},
      place:{type:String}
    }
  }
});

module.exports = mongoose.model("employee", empolyee);
