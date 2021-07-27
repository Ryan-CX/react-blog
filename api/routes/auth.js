const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

//register, creating new user, thus post method

router.post('/register', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPass,
		});

		const user = await newUser.save(); // .save() comes from mongoose.
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

//login

router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(400).json('Wrong Credentials');
		const validated = await bcrypt.compare(req.body.password, user.password);
		!validated && res.status(400).json('Wrong Credentials');
		const { password, ...others } = user._doc; //avoiding sending password to user in the json
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
