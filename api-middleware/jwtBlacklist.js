// 21. jwtBlacklist.js - Prevents blacklisted JWTs from being reused
const blacklist = new Set();
const jwtBlacklist = (req, res, next) => {
    if (blacklist.has(req.header('Authorization'))) {
        return res.status(401).json({ message: 'Token Blacklisted' });
    }
    next();
};
module.exports = jwtBlacklist;