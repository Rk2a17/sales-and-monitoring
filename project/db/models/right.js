const connection = require('../../utils/connection');
var Schema = connection.Schema;
var RightSchema = new Schema({
    'rightname':{type:String,required:true,unique:false},
    'rightdesc':{type:String,required:true},
    'status':{type:String, default:'A'},
    'url':{type:String,required:true},  
});
const RightCollection = connection.model('rights',RightSchema);
module.exports = RightCollection;