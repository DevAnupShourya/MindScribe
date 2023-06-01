// * Packages
const { body, validationResult } = require('express-validator');
const express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// * Custom Packages
const fetchUser = require('../middleware/fetchUser');
// ? User Model
const User = require('../DB/models/User');

// ? Importing JWT TOken From config
const JWT_SECRET = process.env.JWT_SECRET ;

const auth = express.Router();

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
            res.status(400).send({ errors: result.array() });
        }
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
                user = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPassword
                })
                const payload = { user: { user: user.id } }
                const authToken = jwt.sign(payload, JWT_SECRET)

                // ? Sending Success respons to user
                res.json({ "status": "success", "msg": "User Created Succesfully!!", "authToken": authToken })
            }
        } catch (error) {
            // console.log({ "Error": error });
            res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong", })
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
            res.status(400).send({ errors: result.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                // ? If user Exists Then 
                let comparePassword = await bcrypt.compare(password, user.password);
                if (comparePassword) {
                    // ? If Password Is Matching
                    const payload = { user: { user: user.id } }
                    const authToken = jwt.sign(payload, JWT_SECRET); // i think i should cgange it to verify them store the token to db and compare here
                    res.status(200).json({ "status": "success", "msg": "user Found", "authToken": authToken });
                } else {
                    // ? If Password Is Not Matching
                    return res.status(400).json({ "status": "error", "msg": "Plese Login with correct credentials!" })
                }
            }
            else {
                // ? If User Does Not Exists
                return res.status(400).json({ "status": "error", "msg": "Plese Login with correct credentials!" })
            }
        } catch (error) {
            // console.log({ "Error": error });
            res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong", })
        }
    }
)

// ? ROUTE 3 -> Getting Legit User Data
auth.post('/getuser',
    fetchUser,
    async (req, res) => {
        try {
            const userID = req.user.user;
            const legitUser = await User.findById(userID).select('-password');
            res.status(200).json({ "status": "success", "User Found ": legitUser });
        } catch (error) {
            // console.log({ "Error": error });
            res.status(500).json({ "status": "error", "msg": "Somthing Went Wrong", })
        }
    }
)

module.exports = auth;