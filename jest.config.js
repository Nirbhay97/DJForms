// this code the to config jest environment to that of jsdom, by default, its set for Node environment actually
module.exports = {
    testEnvironment: 'jsdom',
  };
  
//   or can update package.json with following code
// "jest": {
//   "testEnvironment": "jsdom"
// }


// if encountered below error:
/* Validation Error:
 Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.
 Configuration Documentation:
 https://jestjs.io/docs/configuration


 As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
 so install below
 npm install --save-dev jest-environment-jsdom */
