const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController')

router.post('/register', registerUser);
router.post('/login', loginUser);

//Registration route
router.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
      }
      const user = new User({ username, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
      res.status(500).json({ message: 'Error registering user:', err });
    }
  });

module.exports = router;