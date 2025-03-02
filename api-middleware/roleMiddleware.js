// 2. roleMiddleware.js - Restricts access based on user roles
const roleMiddleware = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};
module.exports = roleMiddleware;