var mongoose = require("mongoose");
var dbURI =
 "mongodb+srv://chickyboy001:conghung57@cluster0.ke1d3qc.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose.connect(dbURI, {});

mongoose.connection.on("connected", function () {
 console.log("Mongoose default connection open to " + dbURI);
});
mongoose.connection.on("error", function (err) {
 console.log("Mongoose default connection err " + err);
});
mongoose.connection.on("disconnected", function () {
 console.log("Mongoose default connection disconnected");
});
process.on("SIGINT", function () {
 mongoose.connection.close(function () {
  console.log("Mongoose default connection closed");
  process.exit(0);
 });
});
