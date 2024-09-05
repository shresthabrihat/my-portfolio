const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI + "<<<<<<<<<<<<<<<<<<<<<<<<<<");
    mongoose.set('strictQuery', true);

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'my-portfolio-users'  // Specify the database name here
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
