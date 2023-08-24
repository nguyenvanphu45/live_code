const usersRoute = require('./users');
const authRoute = require('./auth');
const challengeRoute = require('./challenge')
const codeRoute = require('./code')

function route(app) {
    app.use('/users', usersRoute);
    app.use('/auth', authRoute);
    app.use('/challenge', challengeRoute);
    app.use('/code', codeRoute);

    app.use('/', (req, res) => res.send('API not available!!'));
}

module.exports = route;
