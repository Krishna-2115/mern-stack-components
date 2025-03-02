// 4. requestLogger.js - Logs API requests for debugging
const morgan = require('morgan');
const requestLogger = morgan('combined');
module.exports = requestLogger;