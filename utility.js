//utility.js

const request = require("request-promise");
const EXTERNAL_API=""; // put url
const accessToken=""; // put access token
const student = {
  student_id: '63362914', // replace with your full name.
  firstname: 'Theerapat', // replace with your full name.
  lastname: 'Serbklin', // replace with your full name.
  age: 19, // put your age.
  gender: 'male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}