// 25. whitelistMiddleware.js - Allows access only to whitelisted IPs
const whitelist = ['127.0.0.1'];
module.exports = (req, res, next) => {
    if (!whitelist.includes(req.ip)) {
        return res.status(403).json({ message: 'Access Denied' });
    }
    next();
};