#!/usr/bin/env mode
var fs = require('fs');
var outfile = "homework.txt";
var out = "A Startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
