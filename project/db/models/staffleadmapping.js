const connection = require('../../utils/connection');
const leads = require('./leads')
var Schema = connection.Schema;
var StaffLeadSchema = new Schema({
    'staffid':{type:Schema.Types.ObjectId, ref:'staffs'},
    'leadid':{type:Schema.Types.ObjectId, ref:leads},
    'status':{type:String,default:'A'}
});
const StaffLeadCollection = connection.model('staffleadmappings',StaffLeadSchema);
module.exports = StaffLeadCollection;