const jwt = require("jsonwebtoken");

// Middleware to verify JWT token and decode the details
function verifyJWT(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ message: "Access denied" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
        if (err) {
            return res.status(401).json({ message: "Failed to authenticate token" });
        }
        req.user = data;
        next();
    });
}

module.exports = verifyJWT;