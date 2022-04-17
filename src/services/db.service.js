const mongoose=require('mongoose');

module.exports.dbRun = async () => {
    await mongoose.connect('mongodb://localhost:27017/mongoDBAuth')
    console.log('DB connection is successfull')
  }  

 