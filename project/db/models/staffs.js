const connection = require('../../utils/connection');
var Schema = connection.Schema;
var StaffSchema = new Schema({
    'emailid':{type:String,unique:true,trim:true,lowercase:true,required:true},
    'name':{type:String,required:true},
    'phone':{type:Number,required:true},
    'designation':{type:String,required:true},
    'password':{type:String,required:true}
    // 'photo':{type:Schema.Types.photo,unique:true,}
});
const StaffCollection = connection.model('staffs',StaffSchema);
module.exports = StaffCollection;