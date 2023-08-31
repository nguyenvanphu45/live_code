const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;
const db = require('./src/config/db');
const route = require('./src/routes');

// Connect to db
db.connect();

// HTTP logger
// app.use(morgan('combined'));

app.use(cookieParser());
app.use(bodyParser.json({ limit: '500mb' }));

app.use(
    cors({
        origin: 'http://10.20.20.56:3100',
        credentials: true,
        optionSuccessStatus: 200,
    }),
);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://10.20.20.56:3000');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Routes init
route(app);

app.listen(PORT, () => {
    console.log(`Server running on port: http://10.20.20.56:${PORT}`);
});
