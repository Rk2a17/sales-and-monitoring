const LeadCollction = require('../models/leads');

const leadOperations = {
    add(leadObjetct){
        var promise = LeadCollction.create(leadObjetct);
        return promise;
    },
    search(leadObjetct){
    var pr = new Promise((resolve,reject)=>{
        LeadCollction.findOne(leadObjetct,(err,doc)=>{
            if (err) {
            reject(err)
            }
            else{
                resolve(doc)
                
                }
            });
        });
        return pr;
    }
}
module.exports = leadOperations;