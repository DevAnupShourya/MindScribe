const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
// ? User Model
const User = require('../DB/models/User');

const fetchUser = async (req, res, next) => {
    try {
        // ? Getting user from jwt token and adding id to req object
        const token = req.cookies.authToken;
        if (!token) {
            // ? If JWT Token in invalid
            return res.status(401).json({ "status": "error", "msg": "Invalid Token", })
        }
        else {
            // ? If JWT Token is valid then sending it ID in req object
            const userData = jwt.verify(token, JWT_SECRET);
            const userByEMail = await User.findOne({email : userData.user.email});
            req.userID = userByEMail._id;
        }
        next();
    } catch (error) {
        return res.status(401).json({ "status": "error", "msg": "Invalid Token", })
    }
}

module.exports = fetchUser