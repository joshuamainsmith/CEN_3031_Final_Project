const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    careersRouter = require('../routes/careersRouter.js'),
    careerClustersRouter = require('../routes/CareerClustersRouter.js'),
    usersRouter = require('../routes/UsersRouter.js');


module.exports.init = () => {
    /*
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origing, X-Requested-With, Content-Type, Accept, Authorization'
      );
      res.setHeader(
        'Access-Controll-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS'
      );
      next();
    });

    // body parsing middleware
    app.use(bodyParser.json());

    // add a router
    app.use('/api/careers/', careersRouter);
    app.use('/api/career_clusters/', careerClustersRouter);
    app.use('/api/users/', usersRouter)

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}
