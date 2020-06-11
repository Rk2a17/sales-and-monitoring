//staff , role , mapping
var staffcrud = require('../db/helpers/staffcrud');
var rolecrud = require('../db/helpers/rolecrud');
var staffrolecrud = require('../db/helpers/staffrolecrud');
var rightcrud = require('../db/helpers/rightcrud');
var rolerightcrud = require('../db/helpers/rolerighrcrud');
var leadscrud = require('../db/helpers/leadcrud');
var staffleadmappingcrud = require('../db/helpers/staffleadcrud');


async function insert(){
    try{
        //staff
    var obj = await staffcrud.add({'emailid':'sagar98@gmail.com','name':'sagar','phone':8800808406,'designation':'bca','password':'sagar123'});
    var obj15 = await staffcrud.add({'emailid':'riya98@gmail.com','name':'riya','phone':4675364533,'designation':'btech','password':'riya123'});
    var obj2 = await staffcrud.add({'emailid':'kushwaharohit908@gmail.com','name':'rohit','phone':7042434380,'designation':'btech','password':'rohit123'});
        //role
    var obj3 = await rolecrud.add({'name':'employee','description':'worker'});
    var obj4 = await rolecrud.add({'name':'manager','description':'managing role'});
        //staff role mapping crud
    var obj5 = await staffrolecrud.add({'staffid':obj._id,'roleid':obj3._id});
    var obj6 = await staffrolecrud.add({'staffid':obj2._id,'roleid':obj4._id});
    var obj16 = await staffrolecrud.add({'staffid':obj15._id,'roleid':obj3._id})
        //right crud
    var obj7 = await rightcrud.add({'rightname':'see all employee','rightdesc':'can see the work of employee','url':'/seeemps'})
    var obj8 = await rightcrud.add({'rightname':'salary of employee','rightdesc':'can see the salary of employee','url':'/salary'})
    var obj9 = await rightcrud.add({'rightname':'update','rightdesc':'can update the system','url':'/update'})
    var obj10 = await rightcrud.add({'rightname':'change theme','rightdesc':'can change the theme','url':'/change'})
    // //rolerightmapping
    var obj11 = await rolerightcrud.add({'roleid':obj4._id,'rightid':obj7._id}); 
    console.log('right 11',obj11);
    var obj12 = await rolerightcrud.add({'roleid':obj4._id,'rightid':obj8._id}); 
    console.log('right 12',obj12);
    var obj13 = await rolerightcrud.add({'roleid':obj3._id,'rightid':obj9._id}); 
    console.log('right of 13',obj13);
    var obj14 = await rolerightcrud.add({'roleid':obj3._id,'rightid':obj10._id}); 
    console.log('right of line 14',obj14)

    //leads for staff 
    var obj17 = await leadscrud.add({emailid:'satyam@gmail.com',name:'satyam',phone:'99998898989',intrestin:'vitara',dob:'4 dec 2000',website:'google.com',location:'Delhi'});
    var obj18 = await leadscrud.add({emailid:'yogesh@gmail.com',name:'yogesh',phone:'99998898349',intrestin:'bolero',dob:'4 march 2000',website:'google.com',location:'Delhi'});
    var obj19 = await leadscrud.add({emailid:'shiva@gmail.com',name:'shiva',phone:'99998898935',intrestin:'creta',dob:'4 dec 1990',website:'google.com',location:'Mumbai'});
    var obj20 = await leadscrud.add({emailid:'nancy@gmail.com',name:'nancy',phone:'99348898989',intrestin:'swift',dob:'4 dec 1997',website:'google.com',location:'Kolkata'});
     //user and lead mapping
    var obj21 = await staffleadmappingcrud.add({'staffid':obj._id,'leadid':obj17._id})
    var obj22 = await staffleadmappingcrud.add({'staffid':obj._id,'leadid':obj18._id})
    var obj23 = await staffleadmappingcrud.add({'staffid':obj15._id,'leadid':obj19._id})
    var obj24 = await staffleadmappingcrud.add({'staffid':obj15._id,'leadid':obj20._id})


    console.log("All insertion done",obj,obj15,obj2,obj3,obj4,obj5,obj6,obj16,obj7,obj8,obj9,obj10,obj11,obj12,obj13,obj14,obj17,obj18,obj19,obj20,obj21,obj22,obj23,obj24);
    }
    catch(e){
        console.log('DB error',e)
    }
}
// insert();

async function find(){
    try{
    var obj = await staffcrud.search({'emailid':'riya98@gmail.com','password':'riya123'})
    console.log("Staff",obj);
    var obj2 = await staffrolecrud.search({'staffid':obj._id});
    console.log("Staff",obj._id);
    console.log('staff Role Mapping',obj2)
    console.log('ROLE ID',obj2.roleid._id)

    var obj3 = await rolerightcrud.search({'roleid':obj2.roleid._id});
    console.log('OBJ RIGHT INFO',obj3)

    }
    catch(e){
        console.log("Error in find",e)
    }
}
find();