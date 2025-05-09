const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  email:{type:String,required:true},
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  password:{type:String,required:true},
  profileImagePath:{type:String,default:""},
  tripList:{type:Array,default:[]},
  wishList:{type:Array,default:[]},
  reservationList:{type:Array,default:[]},
  propertyList:{type:Array,default:[]},
},{timestamps:true})

const UserModel = mongoose.model('users',User)

module.exports = {
  UserModel
}