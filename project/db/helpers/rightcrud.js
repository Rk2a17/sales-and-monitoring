const RighrtCollection = require('../models/right');

const rightOperations = {
    add(rightObject){
        var promise = RighrtCollection.create(rightObject)
        return promise;
    },
    search(rightObjetct){
        var pr = new Promise((resolve,reject)=>{
            RightCollection.findOne(rightObjetct,(err,doc)=>{
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
module.exports = rightOperations;