var https = require('https')
var pem = require('pem')
var express = require('express')
pem.config({
    pathOpenSSL: 'C:/Program Files (x86)/GnuWin32/bin/openssl',
    config : 'C:/Program Files (x86)/GnuWin32/shared/openssl.cnf'
  })
pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
  if (err) {
    throw err
  }
  var app = express()
 
  app.get('/', function (req, res) {
    res.send('o hai!')
  })
 
  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(7000)
})