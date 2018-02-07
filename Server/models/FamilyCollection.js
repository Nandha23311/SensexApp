var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var FamilySchema=new Schema
({
    familyName:{type :String},
    memberName:[{
        name:{type: String},
        age:{type: Number},
        occupation:{type: String}
    }]
});

module.exports=mongoose.model("Familycollection",FamilySchema)