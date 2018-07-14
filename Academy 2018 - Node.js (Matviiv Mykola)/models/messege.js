const mongoose = require("mongoose");

const messegeSchema = mongoose.Schema({
  senderId: {type: ObjectId, ref: 'User', required: true},
  receiverId: {type: ObjectId, ref: 'User', required: true},
  body: {type: String, required: true}
});

const Messege = mongoose.model("Messege", userSchema);

module.exports = Messege;
