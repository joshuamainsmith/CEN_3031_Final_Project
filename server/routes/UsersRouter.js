const users = require('../controllers/CareerClustersController.js'),
    express = require('express'),
    usersRouter = express.Router();
/*
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.

  Note: the listings variable above and the file it is connected to help you trace
*/
usersRouter.get('/', users.search);
usersRouter.post('/', users.create);

/*
  The ':' specifies a URL parameter.
*/
usersRouter.get('/:clusterId', users.read);
usersRouter.put('/:clusterId', users.update);
usersRouter.delete('/:clusterId', users.remove);

// Adding middleware to set param :listingId
usersRouter.param('userId', users.userByID);

module.exports = usersRouter;
