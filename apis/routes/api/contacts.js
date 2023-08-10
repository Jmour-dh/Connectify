const ContactModel = require("../../database/models/contact.model");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { email, sujet, msg} = req.body;
  const newContact = new ContactModel({
    email,
    sujet,
    msg,
  });
  try {
    const contacts = await newContact.save();
    res.json(contacts);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
