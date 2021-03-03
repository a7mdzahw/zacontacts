const mongoose = require("mongoose");

module.exports = function () {
  try {
    const uri = process.env.DB || "";
    const temp =
      "mongodb+srv://zahw:3665@social.0pypw.mongodb.net/contacts_db?retryWrites=true&w=majority";
    mongoose.connect(temp, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log(`CONNECTED TO MONGODB`);
  } catch (ex) {
    console.error(`ERROR CONNECTING TO MONGODB`, ex.message);
  }
};
