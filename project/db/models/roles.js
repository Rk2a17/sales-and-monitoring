const connection = require('../../utils/connection');
var Schema = connection.Schema
var RoleSchema = new Schema({
    'name':{type:String,required:true,unique:false,lowercase:true},
    'description':{type:String,require:true,},
    'status':{type:String,default:'A'}
});
const RoleCollection = connection.model('roles',RoleSchema);
module.exports = RoleCollection;
