const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/User123");
const Schema = mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('User',UserSchema);