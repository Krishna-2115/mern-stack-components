// 24. emailThrottle.js - Limits email requests to avoid spam
const emailRequests = new Map();
module.exports = (req, res, next) => {
    if (emailRequests.has(req.ip)) {
        return res.status(429).json({ message: 'Too Many Requests' });
    }
    emailRequests.set(req.ip, Date.now());
    next();
};