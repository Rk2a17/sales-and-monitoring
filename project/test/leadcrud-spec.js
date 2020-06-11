const leadOperation = require('../db/helpers/leadcrud');
const leadObject = {emailid:'tohit@gmail.com',name:'rohit',phone:'99998898989',intrestin:'car',dob:'4 dec 2000',website:'google.com',location:'Delhi'}

var promise = leadOperation.add(leadObject)
promise.then(data => {
    console.log('recorded Added')
}).catch(err => {
    console.log('Error in add',err);
});


// var promise = userOperation.search(userObject)
// promise.then(data => {
//     console.log('recorded searched',data)
// }).catch(err => {
//     console.log('Error in searching',err);
// });

