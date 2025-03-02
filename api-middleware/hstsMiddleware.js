// 23. hstsMiddleware.js - Enforces HTTPS connections
const hsts = require('hsts');
module.exports = hsts({ maxAge: 31536000 });