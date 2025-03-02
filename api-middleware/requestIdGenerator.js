// 18. requestIdGenerator.js - Generates unique request IDs
const { v4: uuidv4 } = require('uuid');
const requestIdGenerator = (req, res, next) => {
    req.requestId = uuidv4();
    next();
};
module.exports = requestIdGenerator;