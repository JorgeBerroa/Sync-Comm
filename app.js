global.Promise = require('bluebird');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 5000;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const xmlparser = require('express-xml-bodyparser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(xmlparser({}));
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;


