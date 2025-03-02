// 9. compressionMiddleware.js - Compresses responses using gzip
const compression = require('compression');
const compressionMiddleware = compression();
module.exports = compressionMiddleware;