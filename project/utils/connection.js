const mongoose = require('mongoose');
const db = require('./config').db;
mongoose.connect(db.url,{poolsize:db.poolsize},(err)=>{
    if (err) {
        console.log('connection is not created due to some err',err)
    } else {
        console.log("connection is created.............")
    }
});
module.exports = mongoose;