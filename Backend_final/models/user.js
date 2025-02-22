const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Signupusers = mongoose.model("signupusers", userSchema);
module.exports = Signupusers;
//provide abouve the reference to the table or your database where you want to save info
