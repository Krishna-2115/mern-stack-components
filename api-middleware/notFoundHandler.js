// 11. notFoundHandler.js - Handles 404 routes
const notFoundHandler = (req, res, next) => {
    res.status(404).json({ message: 'Route Not Found' });
};
module.exports = notFoundHandler;