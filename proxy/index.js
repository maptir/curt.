var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express()

app.use('/', proxy({ target: 'http://35.197.147.179', changeOrigin: true }))

app.listen(process.env.PORT || 3000)

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
