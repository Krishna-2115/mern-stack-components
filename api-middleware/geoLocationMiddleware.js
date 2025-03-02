// 22. geoLocationMiddleware.js - Fetches user geolocation data
module.exports = (req, res, next) => {
    req.geoLocation = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    next();
}