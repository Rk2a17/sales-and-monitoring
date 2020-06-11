const connection = require('../../utils/connection');
var Schema = connection.Schema;
var LeadSchema = new Schema({
    'emailid':{type:String,required:true,unique:true,lowercase:true,trim:true},
    'name':{type:String,required:true,lowercase:true,trim:true},
    'phone':{type:Number,required:true,min:10},
    'intrestin':{type:String,required:true},
    'dob':{type:String,required:true},
    'website':{type:String,required:true},
    'location':{type:String,required:true}

});
const LeadCollection = connection.model('leads',LeadSchema)
module.exports = LeadCollection;



