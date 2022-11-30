// parse website.html for links in th fields
// and create a prev/next link

var fs = require('fs');
var cheerio = require('cheerio');

//check root directory for html files
var files = fs.readdirSync('../');
var currentFile = window.location.pathname
var currentFileIndex = files.indexOf(currentFile);
var prevFile = files[currentFileIndex - 1];
var nextFile = files[currentFileIndex + 1];

//create prev/next links
var prevLink = '<a href="' + prevFile + '">Previous</a>';
var nextLink = '<a href="' + nextFile + '">Next</a>';

//load website.html
var content = fs.readFileSync('website.html');
var $ = cheerio.load(content);


// write "next link " to page*/

document.write(nextLink)