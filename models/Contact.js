const mongoose = require("mongoose");
const joi = require("joi");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  image: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);

const validate = (contact) => {
  const schema = joi.object({
    name: joi.string().required().min(3).max(255),
    email: joi.string().email().max(255),
    phone: joi.string().required().max(255),
    image: joi.string(),
  });
  return schema.validate(contact);
};

module.exports = {
  Contact,
  validate,
};
