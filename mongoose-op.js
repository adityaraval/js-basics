var mongoose = require('mongoose');
var {userModel} = require('./mongoose');

//add
let task = [{
    "task_id":mongoose.Types.ObjectId(),
    "task_name":"DO Angular",
    "task_status":false},
    {
    "task_id":mongoose.Types.ObjectId(),
    "task_name":"DO VUE",
    "task_status":false}]

var user = new userModel({username:"adityaraval",email:"adi7017@gmail.com",name:"ADITYA",tasks:task});
var user1 = new userModel({username:"adityaraval1",email:"adi7018@gmail.com",name:"ADITYA",tasks:task});
var user2 = new userModel({username:"adityaraval2",email:"adi7019@gmail.com",name:"ADITYA",tasks:task});


user.save().then((user)=>{
    console.log(user);
}).catch((err)=>{
    console.log(err);
});

