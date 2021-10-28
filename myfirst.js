// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//   }).listen(8080);


// var http = require('http');
// var dt = require('./myfirstmodule');
// var url = require('url')

// //create server
// http.createServer(function (req, res) {
//     //200 means everything is okay
//     //second argument is object containing the response headers

//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write("The date and time are currently: " + dt.myDateTime());
// //   res.write(req.url);
// //   res.end();
// }).listen(8080);


// //read file
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     fs.readFile('myfirst.html', function(err, data){
//             res.writeHead(200, {'Content-Type' : 'text/html'});
//             res.write(data);
//             return res.end();
//     });
// }).listen(8080);

// //delete file
// var fs = require('fs');

// fs.unlink('wanini.txt', function(err){
//     if(err) throw err;
//     console.log('joan is really awesome');
    
// });
//fs.rename
//fs.writeFile

// //URL Break-down
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'
// console.log(qdata.year);

// //using node to access html
// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// //uppercase
// var http = require('http');
// var uc = require('upper-case');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type' : 'text/html'});
//     res.write(uc.upperCase('hello world'));
//     res.end();
// }).listen(8080);

// //events in node
// var fs = require('fs');
// var rs = fs.createReadStream('./wanin.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');

// //upload file
// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs'); 

// http.createServer(function (req, res) {

// if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         var oldpath = files.filetoupload.path;
//         var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
//         fs.rename(oldpath, newpath, function (err) {
//           if (err) throw err;
//           res.write('File uploaded and moved!');
//           res.end();
//         });
//     });
// }
// else{

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
// }
//   }).listen(8080);

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'yourfriend@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});