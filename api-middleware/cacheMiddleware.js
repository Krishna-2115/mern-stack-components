// 10. cacheMiddleware.js - Implements server-side caching
const cache = new Map();
const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl;
    if (cache.has(key)) {
        return res.json(cache.get(key));
    }
    res.sendResponse = res.json;
    res.json = (body) => {
        cache.set(key, body);
        res.sendResponse(body);
    };
    next();
};
module.exports = cacheMiddleware;