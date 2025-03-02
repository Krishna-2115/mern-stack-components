// 14. bodyParser.js - Parses JSON and URL-encoded request bodies
const bodyParser = require('body-parser');
const bodyParserMiddleware = [bodyParser.json(), bodyParser.urlencoded({ extended: true })];
module.exports = bodyParserMiddleware;