// * Packages
const { body, validationResult, cookie } = require('express-validator');
const express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const auth = express.Router();

// ? Importing Cookies
const cookieParser = require('cookie-parser');
auth.use(cookieParser());

// ? Utility Function
const apiResponse = require('../utility/apiResponse');
// * Custom Packages
const fetchUser = require('../middleware/fetchUser');
// ? User Model
const User = require('../DB/models/User');

// ? Importing JWT TOken From config
const JWT_SECRET = process.env.JWT_SECRET;

// ? ROUTE 1 -> Creating User
auth.post('/signup',
    // ? Validations    
    [
        body("name", "Enter Valid Name").isLength({ min: 2, max: 30 }),
        body("email", "Enter Valid Email").isEmail(),
        body("password", "Password Must be 5 Charachters").isLength({ min: 5 })
    ],
    // ? Processing Request After Validation
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: result.array() });
        }
        else {
            try {
                // ? Checing Whether Email Already Exists
                let user = await User.findOne({ email: req.body.email })
            
                if (user) {
                    // ? If User Already Exists In DB
                    return res.status(400).json({ "status": "error", "msg": "email already exists!" })
                }
                else {
                    // ? If User Do Not Exists In DB
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(req.body.password, salt);

                    // ? Storing User Input Into DB after Validations
                    const payload = { user: { email: req.body.email } }
                    const token = jwt.sign(payload, JWT_SECRET)

                    user = await User.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: hashedPassword,
                        token: token
                    })

                    res.cookies({ httpOnly: true, maxAge: 3600000, secure: true });
                    res.cookies.authToken = token;

                    console.log("On signup -----------------------------> " , res.cookies.authToken);
                    // ? Sending Success respons to user
                    return res.json({ "status": "success", "msg": "User Created Succesfully!!", "User Details": user })
                }
            } catch (error) {
                return res.status(500).json(apiResponse(false , 'EMail not found!' , error));
            }
        }
    }
)
// ? ROUTE 2 -> Authenticating User
auth.post('/login',
    // ? Validations    
    [
        body("email", "Enter Valid Email").isEmail(),
        body("password", "Password Can Not Be Blank").exists()
    ],
    // ? Processing Request After Validation
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        const { email, password } = req.body;
        try {
            console.log("+++++++++++++++++++*", req.cookies.authToken);

            let user = await User.findOne({ email });
            // ? If user Exists Then 
            if (user) {
                let comparePassword = await bcrypt.compare(password, user.password);
                // ? If Password Is Matching
                if (comparePassword) {
                    // ? User is Legit But Mabe Login From Diffrent Browser
                    if (req.cookies.authToken === undefined) {
                        // ? Storing User Input Into DB after Validations
                        const payload = { user: { email: email } }
                        const token = jwt.sign(payload, JWT_SECRET)
                        // ? return cookie with user details
                        res.cookies.authToken = token;
                        res.cookies = { httpOnly: true, maxAge: 3600000, secure: true };

                        return res.status(200).json(apiResponse(true, "user Found", user));
                    }
                    else {
                        try {
                            // ? If user has authToken cookie
                            const authToken = jwt.verify(req.cookies.authToken, JWT_SECRET);
                            // ? If authToken from DB and from Cookie are matching or not
                            return res.status(200).json({ "status": "success", "msg": "user Found", "user details": user });
                        } catch (error) {
                            return res.status(403).json({ "status": "error", "msg": "Token Is not Matching Try again!" })
                        }
                    }

                } else {
                    // ? If Password Is Not Matching
                    return res.status(404).json({ "status": "error", "msg": "Plese Login with correct credentials!" })
                }
            }
            else {
                // ? If User Does Not Exists
                return res.status(404).json({ "status": "error", "msg": "Plese Login with correct credentials!" })
            }
        } catch (error) {
            return res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong", })
        }
    }
)

// ? ROUTE 3 -> Getting Legit User Data
auth.post('/getuser',
    fetchUser,
    async (req, res) => {
        try {
            const userID = req.userID;
            const legitUser = await User.findOne({ _id: userID }).select('-password');
            return res.status(200).json({ "status": "success", "User Found ": legitUser });
        } catch (error) {
            // console.log({ "Error": error });
            return res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong", })
        }
    }
)

module.exports = auth;