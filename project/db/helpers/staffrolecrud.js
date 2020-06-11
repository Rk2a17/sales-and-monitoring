const StaffRoleMappingCollection = require('../models/staffrolemapping');

const staffRoleMappingOperations = {
    add(staffroleObject){
        var promise = StaffRoleMappingCollection.create(staffroleObject);
        return promise;
    },
    search(staffroleObject){
        console.log("I am in staff role find",staffroleObject)
    var promise = StaffRoleMappingCollection.
    findOne(staffroleObject)
    .populate('roleid')
    return promise;
    }
}
module.exports = staffRoleMappingOperations;