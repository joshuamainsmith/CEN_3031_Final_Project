const usersController = require('../controllers/UsersController.js'),
	User = require('../models/UserModel'),
	express = require('express'),
	usersRouter = express.Router();
(passport = require('passport')), (passportConfig = require('../config/passport')), (JWT = require('jsonwebtoken'));
/*
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.

  Note: the listings variable above and the file it is connected to help you trace
*/

//authentication of the get request for the get request.
usersRouter.get('/', usersController.search);
usersRouter.post('/', usersController.create);

/*
  The ':' specifies a URL parameter.
*/
usersRouter.get('/logout/', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.clearCookie('access_token');
	res.json({ user: { username: '', role: '' }, success: true });
});

// usersRouter.get('/:userId', usersController.read);
usersRouter.put('/:userId', usersController.update);
usersRouter.delete('/:userId', usersController.remove);

const signToken = (userID) => {
	return JWT.sign(
		{
			iss: 'NoobCoder',
			sub: userID
		},
		'NoobCoder',
		{ expiresIn: '1h' }
	);
};

usersRouter.post('/register', (req, res) => {
	const { username, password, role } = req.body;

	User.findOne({ username }, (err, user) => {
		if (err) {
			res.status(500).json({ message: { msgBody: 'Error has occurred', msgError: true } });
		}

		if (user) res.status(400).json({ message: { msgBody: 'Username is already taken', msgError: true } });
		else {
			const newUser = new User({ username, password, role });
			newUser.save((err) => {
				if (err) {
					console.log(err);
					res.status(500).json({ message: { msgBody: 'Error has occurred', msgError: true } });
				} else {
					res.status(201).json({ message: { msgBody: 'Account successfully created', msgError: false } });
				}
			});
		}
	});
});

usersRouter.post('/login/', passport.authenticate('local', { session: false }), (req, res) => {
	if (req.isAuthenticated()) {
		const { _id, username, role } = req.user;
		const token = signToken(_id);
		res.cookie('access_token', token, { httpOnly: true, sameSite: true });
		res.status(200).json({ isAuthenticated: true, user: { username, role } });
	}
});

usersRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { username, role } = req.user;
	res.status(200).json({ isAuthenticated: true, user: { username, role } });
});

//changed session to see if this solves the logout problem
usersRouter.get('/:id', passport.authenticate('jwt', { session: true }), (req, res) => {
	User.findOne({ _id: req.params.id }, function(err, user) {
		if (!user && !err) {
			// This should return a 404 but the tests given to us to pass
			// expect a 200, therefore returning a 200 with an error in the body.
			res.status(404).json({ error: 'User not found.' });
		} else if (err) {
			res.status(400).send(err);
		} else {
			res.json(user);
		}
	});
});

// Adding middleware to set param :listingId
usersRouter.param('userId', usersController.userByID);

module.exports = usersRouter;
