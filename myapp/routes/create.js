var express = require('express');
var router = express.Router();
var fs = require('fs');
var crypto = require('crypto');
 var filename = "";

router.post('/', function (req, res) {	
   DebugLog(req.body.jsontext);
   fs_add(req.body.jsontext);
  res.send('<html><Title>Pure json demo</Title><Body><Table><TR><TD> URL=http://purejson.com/?d='+ filename +'<br> Created Ssuccessfully! <br>JsonData: '+req.body.jsontext+'</TD></TR><TR></TABLE></BODY></HTML>')
})
router.get('/', function (req, res) {
  res.send('<html><Title>Pure json demo</Title><Body><Table><TR><TD>Json</TD><TD>Success</TD></TR><TR></TABLE></BODY></HTML>')
})

function fs_add(jsontext){


DebugLog("Going to write into existing file");
var numbers = new Array(4);
var name = "";
for (var i = 0; i < numbers.length; i++) {
  numbers[i] = randomIntInc(1, 10)
  name = name + numbers[i];
}

 var datetime = new Date();
    console.log(datetime);
	
var fold=  'FD'+name + datetime.getTime();
filename = name + random(6) ;

fname = filename+ '.txt';


DebugLog("Going to create directory "+fold);

fs.mkdir('../TappaFile/'+fold,function(err) {
   if (err) {
      return console.error(err);
   }
   DebugLog("Directory created successfully!");
});
fs.writeFile('../TappaFile/'+fold+'/'+fname, jsontext, function(err) {
   if (err) {
      return console.error(err);
   }
   
   DebugLog("Data written successfully! " + fname);
   DebugLog("Let's read newly written data");
   
   fs.readFile('../TappaFile/'+fold+'/'+fname, function (err, data) {
      if (err) {
         return console.error(err);
      }
      DebugLog("Asynchronous read: " + data.toString());
	  SaveDB(filename,fold+'/'+fname);
   });
});
}

function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}



function random (howMany, chars) {
      chars = chars
        || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
    var rnd = crypto.randomBytes(howMany)
        , value = new Array(howMany)
        , len = len = Math.min(256, chars.length)
        , d = 256 / len;

    for (var i = 0; i < howMany; i++) {
          value[i] = chars[Math.floor(rnd[i] / d)]
    };

    return value.join('');
}

function DebugLog(logtext){
var datetime = new Date();
fs.appendFile('Logs/app.log', 'Debug at: '+datetime +' info: '+ logtext +'\n', function(err) {
   if (err) {
      return console.error(err);
   }
});
}

function SaveDB(key,info){
fs.appendFile('../DBF/app.tpf', key +':'+ info +'\n', function(err) {
   if (err) {
      return console.error(err);
   }
});
}


module.exports = router;
