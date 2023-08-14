const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Config
var fs = require('fs'),
  http = require('http');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:5000',
    pathRewrite: { '^/api/': '/api/' },
  })
);

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    pathRewrite: { '^/': '/' },
  })
);

var httpsServer = http.createServer(app);

httpsServer.listen(3002);
