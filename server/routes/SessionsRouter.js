// const sessions = require('../controllers/SessionsController.js'),
//     express = require('express'),
//     sessionsRouter = express.Router();
// /*
//   These method calls are responsible for routing requests to the correct request handler.
//   Take note that it is possible for different controller functions to handle requests to the same route.
//
//   Note: the listings variable above and the file it is connected to help you trace
// */
// sessionsRouter.get('/', careerClusters.search);
// sessionsRouter.post('/', careerClusters.create);
//
// /*
//   The ':' specifies a URL parameter.
// */
// sessionsRouter.get('/:clusterId', careerClusters.read);
// sessionsRouter.put('/:clusterId', careerClusters.update);
// sessionsRouter.delete('/:clusterId', careerClusters.remove);
//
// // Adding middleware to set param :listingId
// sessionsRouter.param('clusterId', careerClusters.clusterByID);
//
// module.exports = sessionsRouter;
