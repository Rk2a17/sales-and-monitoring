const connection = require('../../utils/connection');
const rights = require('./right')
var Schema = connection.Schema;
var RoleRightSchema = new Schema({
    'rightid':{type:Schema.Types.ObjectId, ref:rights,required:true},
    'roleid':{type:Schema.Types.ObjectId, ref:'roles',required:true},
    'status':{type:String,default:'A'}
});
const RoleRightCollection = connection.model('rolerightmappings',RoleRightSchema);
module.exports = RoleRightCollection;