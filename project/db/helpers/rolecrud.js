const RoleCollection = require('../models/roles');
const roleOperation = {
    add(roleObject){
       var promise =  RoleCollection.create(roleObject);
       return promise;
    }
}
module.exports = roleOperation;