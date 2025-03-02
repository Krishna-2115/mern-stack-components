// 12. csrfProtection.js - Protects against CSRF attacks
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
module.exports = csrfProtection;