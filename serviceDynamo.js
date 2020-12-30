

var AWS = require('aws-sdk'); 


AWS.config = new AWS.Config();
AWS.config.accessKeyId="AKIAI4WT4DEIGEUULUFA"
AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

var dynamoDB=new AWS.DynamoDB.DocumentClient();
// function createTable() {
//     const params = {
//       TableName: "Promotions",
//       KeySchema: [{ AttributeName: "promoId", KeyType: "HASH" },
//       { AttributeName: "userId", KeyType: "RANGE" }],
//       AttributeDefinitions: [{ AttributeName: "orderId", AttributeType: "S" },{ AttributeName: "userId", AttributeType: "S" }],
//       ProvisionedThroughput: {
//         ReadCapacityUnits: 10,
//         WriteCapacityUnits: 10
//       }
//     };
  
//     dynamoDB.createTable(params, function(err, data) {
//       if (err) {
//         console.error("Unable to create table");
//       } else {
//         console.log("Created table",data);
//       }
//     });
//   }
const item={
  orderId: "128090000",
  address: "metpally",
  userId: "12345",
  phoneNumber: "9440129275",
  emailId: "abbu@gmail.com",
  promotionCode: "1112",
  items:[{
    itemId:"123",
    quantity:"1",
    description:"fifth order first item"
    },
    {
      itemId:"1234",
      quantity:"1",
      description:"fifth order first item"
      }]
  }
  const addOrder = async (item) => {
    const params = {
        TableName: "Orders",
        Item:item
      
        


        }
      
    
 let x= await dynamoDB.put(params, function(err,res) {
        if (err) {
          console.error("Unable to add order ",JSON.stringify(err));
        } else {
        
            return res;
        }
      });
      return x.httpRequest.body;
      
  
      
};

const getOrderBasedOnOrderId=async(id)=> {
  var params = {
   
    ExpressionAttributeValues: {
     ":s": id
    }, 
    FilterExpression: "orderId = :s", 
  
    TableName: "Orders"
   };

let x=await dynamoDB.scan(params).promise();

return x.Items

  
}
const getDiscountBasedOnPromoCode=async(id)=> {
  var params = {
   
    ExpressionAttributeValues: {
     ":s": id
    }, 
    FilterExpression: "promoId = :s", 
  
    TableName: "Promotions"
   };

let x=await dynamoDB.scan(params).promise();

return x.Items

  
}




  
  module.exports = {
    addOrder,getOrderBasedOnOrderId,getDiscountBasedOnPromoCode
  };