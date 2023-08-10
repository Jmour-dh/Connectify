const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  email:{ type: String, unique: true },
  sujet: String,
  msg: String,
});

const ContactModel = mongoose.model("contacts", contactSchema);

module.exports = ContactModel;