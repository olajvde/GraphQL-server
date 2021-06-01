const mongoose = require("mongoose");

const Cat = mongoose.model("Cat", {name: String});

const Owner = mongoose.model("Owner", {
  name: {
    type: String,
    unique: true,
  },
});

module.exports = {Cat, Owner};
