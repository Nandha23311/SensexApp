var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var FamilySchema=new Schema
({
    familyName:{type :String},
	villageName:{type:String},
    memberName:[{
		_id:false,
        name:{type: String},
        age:{type: Number},
		gender:{type:String},
        occupation:{type: String}
    }],
    villageName:{type:String}
});

module.exports=mongoose.model("Familycollection",FamilySchema)