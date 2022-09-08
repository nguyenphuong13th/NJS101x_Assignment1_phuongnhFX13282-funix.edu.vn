const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empolyee = new Schema({
  name: { type: String, require: "true" },
  password: { type: String, require: "true" },
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
});

module.exports = mongoose.model("employee", empolyee);
