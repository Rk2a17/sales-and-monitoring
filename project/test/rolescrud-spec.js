const rolesOperation = require('../db/helpers/rolecrud');
const rolesObject = {name:'supervisor',description:'Can order the staff'};
var promise = rolesOperation.add(rolesObject)
promise.then(data=>{
    console.log("Roles added")
}).catch(err=>{
    console.log('Error in add',err);
});