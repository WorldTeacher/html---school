//create link to next file in root dir

var fs = require('fs')
var cheerio = require('cheerio')

//check root directory for html files
var files = fs.readdirSync('../')
var currentFile = window.location.pathname
var currname = currentFile.split('/').pop()
var currentFileIndex = files.indexOf(currentFile)
var nextFile = files[currentFileIndex + 1]
document.write(nextFile)

//create next link
var nextLink = '<a href="' + nextFile + '">Next</a>'
//load current website
var content = fs.readFileSync(currname)
var document = cheerio.load(content)
//write "next link " to page
document.write(nextLink)
return nextLink



