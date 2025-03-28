// 13. sessionMiddleware.js - Manages session authentication
const session = require('express-session');
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
});
module.exports = sessionMiddleware;