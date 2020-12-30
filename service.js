


'use strict';
const { getOrderBasedOnOrderId,getDiscountBasedOnPromoCode,addOrder } = require('./serviceDynamo');
const { promocodeDetails, getDataFromS3 } = require('./serviceS3');


const validate = require("./validate");




/**
 *
 * @param {Object} event event object
 */

const process = async (event,callback) => {
    //await employeeDetailsEvent.createTable();
 let validationOfParameters=await validate.validate(event);
 
 if(validationOfParameters){
     let order=await getOrderBasedOnOrderId(event.orderId);
    //  console.log(order.length)
if(order.length!=0){
        return "order exists"
    }
    else{
        
        var data= await getDataFromS3();
       
        var keys=Object.keys(data);
      let  promoApply;
        
        for(var i=0;i<keys.length;i++){
            // console.log(keys[i])
            // console.log(event.promotionCode)
        if(keys[i]==event.promotionCode){
            promoApply=true;
                    break;
                }
        else{
    
           promoApply=false
            }    

         
            }
        if(promoApply){
        await addOrder(event);
        return "New Order is added"
    }
    else{
        return "Promocode is not applicable"
    }
         
}
 }
else{
 //console.log("New order cannot be added");
 return  "Some fields are missing,every value is required"
}
}

/**
 * Export
 */
module.exports = {
    process
};

