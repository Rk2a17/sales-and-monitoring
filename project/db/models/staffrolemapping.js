const connection = require('../../utils/connection');
const roles = require('./roles')
var Schema = connection.Schema;
var StaffRoleSchema = new Schema({
    'staffid':{type:Schema.Types.ObjectId,ref:'staffs',required:true},
    'roleid':{type:Schema.Types.ObjectId,ref:roles,required:true},
    'status':{type:String,default:'A'}
});
var StaffRoleCollection = connection.model('staffrolemapping',StaffRoleSchema);
module.exports = StaffRoleCollection;