var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {

   fs.readFile( __dirname + "/" + "bids.json", 'utf8', function (err, data) {
      var bids = JSON.parse( data );
      a = JSON.stringify(bids.bid[Math.floor(Math.random() * bids.bid.length)])
      a = bids.bid[Math.floor(Math.random() * bids.bid.length)].ad
      res.send(a);
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
