
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const jwtSecret = "mynameisahmadalikhan123456789#%$"

// Define a POST route to create a new user
router.post('/newUser',
  // Validation body
  body('email', 'Incorrect email').isEmail(),

  body('name').isLength({ min: 5 }),

  body('password', 'Incorrect password').isLength({ min: 5 }),

  async (req, res) => {

    // if validation is not correct then this function will run.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Bcrypt Password
    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password, salt)


    try {
      // Use the User.create method to create a new user document in the database.
      // This method takes an object as an argument with the user's information.
      const newUser = await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });

      // If the user is successfully created, send a success response with the new user data.
      res.send({ success: true, newUser });
    } catch (error) {
      // If an error occurs during user creation, catch the error and handle it.
      console.error(error);

      // Send a response indicating that user creation was not successful and include an error message.
      res.send({ success: false, error: 'An error occurred while creating the user.' });
    }
  });


// Define a POST route to login user
router.post(
  '/loginuser',
  // Validation body
  [
    body('email', 'Incorrect email').isEmail(),
    // Password must be at least 5 chars long
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      let userData = await User.findOne({ email });

      if (!userData) {
        return res.status(400).json({ errors: "Login with correct Credentials" });
      }
      // Bcrypt the password
      const passwordCompare = bcrypt.compare(password, userData.password)
      if (!passwordCompare) {
        return res.status(400).json({ errors: "Login with correct Credentials" });
      }

      const data = {
        user :{
          id :userData.id
        }
      }
      const authToken = jwt.sign(data, jwtSecret)
      return res.json({ success: true ,authToken:authToken });

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'An error occurred while logging in.' });
    }
  }
);

// Export the router so it can be used in other parts of the application.
module.exports = router;




