const {Cat, Owner} = require("./models/Cat");
module.exports.resolvers = {
  Query: {
    cats: () => Cat.find(),
    owners: () => Owner.find(),
  },

  Mutation: {
    createCat: (_, {name}) => {
      const kitty = new Cat({name});
      kitty.save();
      return kitty;
    },
    createOwner: (_, {name}) => {
      const person = new Owner({name});
      try {
        person.save();
        return person;
      } catch (error) {
        return error.message;
      }
    },
  },
};
