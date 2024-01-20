const mongoose = require("mongoose");


// const mongoURI = process.env.MONGODB_URI;

const connectToMongo = () => {
  mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected Successfully");
  });
};

module.exports = connectToMongo;