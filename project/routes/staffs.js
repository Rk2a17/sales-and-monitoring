const express = require('express');
const staffRoutes = express.Router();
const logger = require('../utils/logger');

//registration display for staff-done

staffRoutes.post('/register',(request,response)=>{

    logger.log('debug','register Request Received........',request.body);
    // console.log("Request Body is ", request.body);
    var staffObject = request.body;
    const staffOperations = require('../db/helpers/staffcrud')
    const promise = staffOperations.add(staffObject);
    
    promise.then(doc => {
        
        response.send('staff registered successfully');

    }).catch(err => {
        response.send('Some error in Db Level')
        logger.log('error','some error occur',err);
        
    });
});


//Login Display For Staff
staffRoutes.post('/login',(req,res)=>{
    logger.log('debug','Login Request Received',req.body);
    var staffObject = req.body;
    const staffOperations = require('../db/helpers/staffcrud');
    // var promise = staffOperations.search(staffObject);
    
    const promise/*staffFinalObject*/ = staffOperations.search(staffObject);
    console.log("promise is",promise);
    promise.then(staffFinalObject=>{
        console.log("user id or pwd before if condition",staffFinalObject)
    if (staffFinalObject) {
        req.session.uid = staffFinalObject.emailid
        logger.log('debug','Inside IF condition of User Id pwd Check');
        console.log("inside user id or pwd",staffFinalObject)
        // res.redirect('/dashboard');   
        res.render('dashboardpage',{'staffObject':staffFinalObject});
    } else {
        res.send("Invalid User Id or Passssssword")
    }

    }).catch(err=>{
    })
    
});

staffRoutes.get('/dashboard',(req,res)=>{
    console.log('Userid in dashboard is and I Am A Staff Member ',req.query.name);
    if(req.session && req.session.uid){
        var phones = [1111,2222,3333,4444,5555];
        var obj = {uid:req.session.uid, email:'rohit@gmail.com','phone':phones}
        res.render('dashboardpage',obj);
    }
    else{
        console.log("Inside else part...........");
        const path = require('path');
        const p1 = path.normalize(__dirname+'/..');
        const fullpath = path.join(p1,'/public/login.html')
        res.sendFile(fullpath);

    }
});

//logout route

staffRoutes.get('/logout',(req,res)=>{
    if(req.session && req.session.staffid){
        req.session.destroy((err)=>{
            if(err){
                console.log('Error during session Destroy',err);
            }
            else{
                console.log('session Destroy Successfully');
            }
        });
        res.send('Logout SuccessFully');
    }
    else{
        const path = require('path');
        const p1 = path.normalize(__dirname+'/..');
        const fullpath = path.join(p1,'/public/login.html')
        res.sendFile(fullpath);
    }
})

module.exports = staffRoutes;