// 19. apiResponseFormatter.js - Standardizes API responses
const apiResponseFormatter = (req, res, next) => {
    res.success = (data) => res.json({ success: true, data });
    res.error = (message) => res.status(400).json({ success: false, message });
    next();
};
module.exports = apiResponseFormatter;