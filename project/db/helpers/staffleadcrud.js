const StaffLeadMappingCollection = require('../models/staffleadmapping')
const staffLeadMappingOperations = {
        add(staffleadObject){
            var promise =  StaffLeadMappingCollection.create(staffleadObject);
            return promise;
        },
        search(staffleadObject){
            console.log("i am in  staff find",staffleadObject)
           var promise = StaffLeadMappingCollection.
           findOne(staffleadObject)
           .populate('leadid');
           return promise;
        }
}
module.exports = staffLeadMappingOperations;