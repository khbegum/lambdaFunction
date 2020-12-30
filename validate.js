'use strict';
// var AWS = require('aws-sdk'); 
// const { getOrderBasedOnOrderId,getDiscountBasedOnPromoCode } = require('./serviceDynamo');

// var dynamoDB=new AWS.DynamoDB.DocumentClient();
  
// const validate=(event)=>{
// const orderDetails={};
//  orderDetails.id=event.orderId;
//  orderDetails.promotionCode=event.promotionCode;
// orderDetails.items=event.items;
// let found;
// //console.log(orderDetails.items.length)
// // for(let i=0;i<orderDetails.items.length;i++){
// //    console.log(orderDetails.items[i].itemId.length)
// //    if(orderDetails.items[i].itemId.length==0){
// //        found= false
// //    }
// //    else{
// //    found= true
// //    }
// //    console.log(found) 
// // }

// // return found

// // }
// let order=getOrderBasedOnOrderId(orderDetails.id);
// found=order.then(data=>{
    
//     if(data.length!=0){
//         found =false;
//         console.log("order exists")
//     }
//     else{
//         let promo=getDiscountBasedOnPromoCode(orderDetails.promotionCode);
//       found = promo.then(data=>{
//             if(data.length!=0 ){
//                 console.log(data)
                 
//                 console.log("Promocode applicable");
//                 console.log(orderDetails.items.length)
// for(let i=0;i<orderDetails.items.length;i++){
//    console.log(orderDetails.items[i].itemId.length)
//    if(orderDetails.items[i].itemId.length==0){
//        found= false
//    }
//    else{
//    found= true
//    }
//    console.log(found) 
// }

// return found



//             }
//             else{
//                 console.log("Promocode not applicable")
//                 return false
//             }
//         })
//         return found
     
      
      
      
//     }
// })
// return found
  
  
//   }

  const validate=async(event)=>{
      
      let orderDetails={};
      orderDetails=event;
      let  found;
  for(let x in orderDetails){  
        if(orderDetails[x].length==0){

            //console.log("every field is required")
            found= false;
            break;
        } 
        else{
            found= true;
            //console.log("ever field is filled")

        }
        
        
            }
            return found
      
      

  }
   

module.exports={
    validate
}