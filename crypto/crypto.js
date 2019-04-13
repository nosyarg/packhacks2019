var sjcl = require('sjcl');
var fs = require('fs');


function hash(infile)
{
        var data = fs.readFileSync(infile,'ascii');
        return sjcl.codec.hex.fromBits((new sjcl.hash.sha256()).update(data).finalize());
}

var stupidstring = "bar.jpg";
var stupidhash = hash(stupidstring);
console.log(stupidhash);
