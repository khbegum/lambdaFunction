'use strict';

var aws = require('aws-sdk'); //require aws-sdk
 

var s3 = new aws.S3({ accessKeyId: "khkh", secretAccessKey:"uiuu" }); //create a s3 Object with s3 User ID and Key




//Fetch or read data from aws s3
const getDataFromS3 = async() => {
    var params = {
        Bucket: 'promotionscode',
        Key: 'promotionCode.json'
    }
  let data =  await s3.getObject(params).promise()
  var dataString = data.Body.toString();
  var dataObject = JSON.parse(dataString);

  //console.log(dataObject)
  return dataObject;
      
        //c//onsole.log(obj)
        //console.log(dataObject)
}
//    getDataFromS3().then(data=>{
//        console.log(data)
//    })
//console.log(getDataFromS3())
module.exports={
    getDataFromS3
}
