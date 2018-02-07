var Family=require("../models/FamilyCollection");
var HttpStatus = require('http-status');


exports.saveFamily=function(req,res){
    console.log("Hitted ::"+req.url);
    var reqBody=req.body;
    console.log("ReqBody",reqBody)
    var familyObj=new Family(reqBody.familyObj);
    familyObj.save(function(errData,savedData){
        if (savedData != null)
        {
            res.status(HttpStatus.OK).json({
                status: 'success',
                code: HttpStatus.OK,
                data:savedData
            });
            return;
        }
        else
        {
            res.status( HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'failure',
                code:  HttpStatus.INTERNAL_SERVER_ERROR,
                data: "Unexpected error accessing data"
            });
            return;
        }
    })
}
exports.findFamily=function(req,res){
    console.log("Hitted ::"+req.url);
    var reqBody=req.body;
    var findObj={};
    if(reqBody.villageName){
    findObj.villageName=reqBody.villageName;
    }

    Family.find(findObj,function(errData,findData){
        if (findData != null)
        {
            res.status(HttpStatus.OK).json({
                status: 'success',
                code: HttpStatus.OK,
                data:findData
            });
            return;
        }else{
             res.status(HttpStatus.NOT_FOUND).json({
                status: 'failure',
                code: HttpStatus.NOT_FOUND,
                data:"Records Not Found"
            });

        }
        if(errData)
        {
            res.status( HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'failure',
                code:  HttpStatus.INTERNAL_SERVER_ERROR,
                data: "Unexpected error accessing data"
            });
            return;
        }
    })
}