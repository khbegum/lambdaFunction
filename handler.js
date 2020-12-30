'use strict';

/**
 * Require
 */

/**
 * Require Lookup Order Service
 */
const serviceSVC = require('./service');

/**
 *
 * @param {Object} event event
 * @param {Object} context Unit Test context object
 * @param {Object} callback Function to return data to caller
 */

const handler = async function (event, context, callback) {
    // Setup service context for Unit Test
   
 try {
       let result= await serviceSVC.process(event);
       //console.log(result)
       return result
       //callback(null, result);
   
       
    } 
    catch (err) {
        return err;
        //callback(null, { statusCode: 400, body: JSON.stringify(err) });
    };
};

module.exports={
    handler
}
