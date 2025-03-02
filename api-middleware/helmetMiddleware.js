// 15. helmetMiddleware.js - Secures HTTP headers with Helmet
const helmet = require('helmet');
const helmetMiddleware = helmet();
module.exports = helmetMiddleware;