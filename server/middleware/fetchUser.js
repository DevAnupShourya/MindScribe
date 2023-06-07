const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
// ? User Model
const User = require('../db/models/User');

// ? Utility Function
const apiResponse = require('../utility/apiResponse');

const fetchUser = async (req, res, next) => {
    // ? Getting user from jwt token and adding id to req object
    try {
        const token = req.headers.authtoken;
        if (!token) {
            // ? If JWT Token in invalid
            return res.status(404).json(apiResponse(false , "Token Missing" ));
        }
        else {
            // ? If JWT Token is valid then sending it ID in req object
            const userData = jwt.verify(token, JWT_SECRET);
            if(userData){
                const userByEMail = await User.findOne({token : token});
                req.userID = userByEMail._id;
            }else{
                return res.status(402).json(apiResponse(false ,  "Token Not Matching!"))
            }
        }
        next();
    } catch (error) {
        return res.status(401).json(apiResponse(false , "Invalid Token"))
    }
}

module.exports = fetchUser