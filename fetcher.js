const request = require('request')
const fs = require('fs');
const input = process.argv

request(`${input[2]}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(`${input[3]}`, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved, ${fs.statSync(`${input[3]}`).size} bytes to ${input[3]}`)
  })
});