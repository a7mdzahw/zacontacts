const express = require("express");
const router = express.Router();

const { Contact, validate } = require("../../models/Contact");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (ex) {
    console.log(ex.message);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const contact = new Contact(req.body);
  contact.save();
  res.status(201).json(contact);
});

module.exports = router;
