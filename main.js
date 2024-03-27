#!/usr/bin nodejs
/*var http = require('http');
var fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
	    res.write(html);
        res.end('Hello World.');
    }).listen(8046,'localhost');
})*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Webtech-24/html/index.html');
});

app.listen(8046);