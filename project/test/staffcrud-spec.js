const staffOperation = require('../db/helpers/staffcrud');
const staffObject = {emailid:'davi345@gmail.com',name:'davi',phone:33243265744,designation:'Btech',password:'davisharma'};
var promise = staffOperation.add(staffObject);
promise.then(data =>{
    console.log("Staff Added");
}).catch(err=>{
    console.log("Error in Add",err)
});

