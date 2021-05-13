const {Schema, model} = require("mongoose");

const userSchema = new Schema({
	username: String,
	ic : String,
  phone: String,
  adress: String
}, {
	versionKey: false
});

module.exports = model("users", userSchema);