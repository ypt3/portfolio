var express = require('express');
var path = require('path');
var app = express();
var nodemailer = require("nodemailer");

app.use(express.static('assets'));

// var smtpTransport = nodemailer.createTransport({
//   service: 'Hotmail',
//   auth: {
//     user: 'myemail.com',
//     pass: 'something'
//   }
// });

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// app.get('/send', function(req, res){
//
//   var mailOptions={
//        from: "Alan <alanalan216@hotmail.com>",
//        name : req.query.name,
//        To: req.query.email,
//        subject: req.query.subject,
//        text: req.query.message
//    };
//
//    console.log(mailOptions);
//     smtpTransport.sendMail(mailOptions, function(error, response){
//      if(error){
//             console.log(error);
//         res.end("error");
//      }else{
//             console.log("Message sent: " + response.message);
//         res.end("sent");
//       }
//   });
// });

app.listen(8000, function(){
  console.log('Listening on port >>> 8000');
});
