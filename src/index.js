const {ApolloServer, gql} = require("apollo-server-express");
const express = require("express");
const app = express();
const {resolvers} = require("./resolvers");
const {typeDefs} = require("./typeDefs");
const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect("mongodb://localhost/graphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db.on("error", (error) => console.log("Error occurred" + error));
db.once("open", () => console.log("Database connected"));

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({app});

  app.listen({port: 4000}, () => console.log("Server Started"));
};

startServer();
