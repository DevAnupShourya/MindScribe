const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey";

const fetchUser = (req, res, next) => {
    try {
        // ? Getting user from jwt token and adding id to req object
        const token = req.header("auth-token");
        if (!token) {
            // ? If JWT Token in invalid
            res.status(401).json({ "status": "error", "msg": "Invalid Token", })
        }
        else {
            // ? If JWT Token is valid then sending it ID in req object
            const userData = jwt.verify(token, JWT_SECRET);
            req.user = userData.user;
        }
        next();
    } catch (error) {
        res.status(401).json({ "status": "error", "msg": "Invalid Token", })
    }
}

module.exports = fetchUser