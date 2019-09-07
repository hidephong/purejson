var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.send('<html><Title>Creating pure json demo</Title><Body><form action="/create" method="POST"><Table><TR><TD>Json</TD><TD><Textarea style="margin: 0px; width: 1218px; height: 270px;"  name = "jsontext" id="jsontext"></Textarea></TD></TR><TR><TD>Mode</TD><TD><Select id="mode"><option value="0">Simply</option><option value="1">Encode Json</option><option value="2">Security Json with Username and Password</option><option value="3">Security Json with key</option></Select></TD></TR><TR><TD>Username</TD><TD><input id="usr"/></TD></TR><TR><TD>Password</TD><TD><input id="ps"/></TD></TR><TR><TD>Key</TD><TD><input id="key" size="255" style="width: 400px;"/></TD></TR><TR><TD colspan=2><button type="Submit">Submit</button></TD></TR></TABLE></BODY></HTML>')
});

module.exports = router;
