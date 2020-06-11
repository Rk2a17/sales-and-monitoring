const RoleRightMappingCollection = require('../models/rolerightmapping');

const RoleRightMappingOperations = {
    add(rolerightObject){
        var promise = RoleRightMappingCollection.create(rolerightObject);
        return promise;
    },
    search(rolerightObject){
        var promise = RoleRightMappingCollection.
        findOne(rolerightObject)
        .populate('rightid')
        return promise;
        }
}
module.exports = RoleRightMappingOperations;