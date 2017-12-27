var mongoose = require('mongoose');
mongoose.connect('mongodb://dbtest:dbtest@ds133597.mlab.com:33597/dbtest', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
var taskSchema = new Schema({
    "task_id":{
        type:Schema.Types.ObjectId
    },
    "task_name":{
        type:'string'
    },
    "task_status":{
        type:'boolean'
    }
})

var userSchema = new Schema({
    "username":{
        type:'string',
        unique:true
    },
    "email":{
        type:'string',
        unique:true
    },
    "name":{
        type:'string',
    },
    tasks:[taskSchema]
});

var userModel = mongoose.model('User',userSchema);
module.exports = {userModel:userModel};