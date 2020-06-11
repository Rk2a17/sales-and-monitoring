const express = require('express');
const leadRoutes = express.Router();
const logger = require('../utils/logger');




                                                                                    // Register page
leadRoutes.post('/register',(request,response)=>{

    logger.log('debug','register Request Received........',request.body);
    // console.log("Request Body is ", request.body);
    var leadObject = request.body;
    const leadOperations = require('../db/helpers/leadcrud')
    const promise = leadOperations.add(leadObject);
    
    promise.then(doc => {
        
        response.send('Lead registered successfully');

    }).catch(err => {
        response.send('Some error in Db Level')
        logger.log('error','some error occur',err);
        
    });
});

                                                                                        //Login Page
leadRoutes.post('/login',(request,response)=>{

    logger.log('debug','Login Request Received........',request.body);
    // console.log("Request Body is ", request.body);
    var leadObject = request.body;
    const leadOperations = require('../db/helpers/leadcrud')
    const promise = leadOperations.search(leadObject);
    promise.then(doc => {
        if(doc){
        request.session.uid = leadObject.name
        logger.log('debug','Inside If Condition of Userid pwd check');
        response.redirect('/dashboard');
    }
    else{
        response.send("invalid user id or password")
        }
    }).catch(err => {
        response.send('Some error in Db Level')
        logger.log('error','some error occur',err);
        
    });


    leadRoutes.get('/dashboard',(req,res)=>{
        // res.status(200).send("<h1>Welcome User, U Are On Dashboard PAGE</h1>")
        console.log('Userid in dashboard is ',req.query.name);
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
    


                                                                                        //Logout Page
});

leadRoutes.get('/logout',(req,res)=>{
    if(req.session && req.session.uid){
        req.session.destroy((err)=>{
            if(err){
                console.log('Error dusring ession Destroy',err);
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


module.exports = leadRoutes;