// 7. sanitizeInput.js - Prevents SQL injection and XSS
const sanitize = require('express-mongo-sanitize');
const sanitizeInput = sanitize();
module.exports = sanitizeInput;