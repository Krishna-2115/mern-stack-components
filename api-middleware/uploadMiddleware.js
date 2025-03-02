// 20. uploadMiddleware.js - Handles file uploads using Multer
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
module.exports = upload;