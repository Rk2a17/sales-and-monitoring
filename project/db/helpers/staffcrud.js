const StaffCollection = require('../models/staffs');
var staffrolecrud = require('./staffrolecrud');
var rolerightcrud = require('./rolerighrcrud');
var staffleadmappingcrud = require('./staffleadcrud');

const staffOperations = {
    add(staffObject){
        var promise = StaffCollection.create(staffObject);
        return promise;
    },

    async search(staffObject){
        var result = await StaffCollection.findOne(staffObject);
        try{
        if(result){
            console.log(":::::Result is::::::",result);
            var obj2 = await staffrolecrud.search({'staffid':result._id});
            console.log('obj2 is ------>',obj2);
            var obj20 = await staffleadmappingcrud.search({'staffid':result._id});
            console.log("obj 20 is=========>>> ",obj20);
            var obj3 = await rolerightcrud.search({'roleid':obj2.roleid._id});
            var staffObject2 = {
                'leadid':obj20.leadid,
                'staffname':result.name,
                'staffid': result.emailid,
                'rolename': obj2.roleid.name,
                'rights': obj3
            };
            console.log("########Final Staff object###### ",staffObject2)
            return staffObject2;

            // return result
        }else{
            return null
        }
    }catch(e){
        console.log('error is',e);
        return e;
    }
    return null
        
    /*    var pr = new Promise((resolve,reject)=>{
            StaffCollection.findOne(staffObjetct,(err,doc)=>{
                if (err) {
                reject(err)
                }
                else{
                    resolve(doc)
                    
                    }
                });
            });
            return pr;
    */
        }
    
}
module.exports = staffOperations;