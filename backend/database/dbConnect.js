const mongoose = require('mongoose')

const DatabaseConnection = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(`Database Connected`) 
  } catch (error) {
    console.log(`Database Not Connected`);
    console.error(error);
    process.exit(1)
  }
}

module.exports = {
  DatabaseConnection
}


/*

process.exit(1) is not specific to Mongoose — it's a Node.js command. It’s commonly used in Mongoose applications during error handling, especially when the connection to the database fails.

Explanation:
process.exit([code]) ends the Node.js process.

An exit code of 1 means that the process exited with an error.

An exit code of 0 means a successful exit.

*/ 