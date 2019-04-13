var sjcl = require('sjcl');
var fs = require('fs');


function hash(infile)
{
        var data = fs.readFileSync(infile,'ascii');
        return sjcl.codec.hex.fromBits((new sjcl.hash.sha256()).update(data).finalize());
}
var datadict = {};
var stupidstring = process.argv[2];
var stupidhash = hash(stupidstring);
datadict[stupidhash] = "TODAY";
console.log(datadict[stupidhash]);
