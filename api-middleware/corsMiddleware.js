// 6. corsMiddleware.js - Configures CORS settings
const cors = require('cors');
const corsMiddleware = cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});
module.exports = corsMiddleware;