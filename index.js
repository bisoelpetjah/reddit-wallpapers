'use strict';

require('babel-register');
require('babel-polyfill');
require('isomorphic-fetch');

var server = require('./server').default;

const PORT = process.env.PORT || 3001;

server.listen(PORT);
