const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ErrorHandler = require('./utils/ErrorHandler');
const { generateErrors } = require('./middlewires/errors');

require('./db/DbUrl').DatabaseConnet();

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", require('./routes/IndexRoute'));

app.all("*", (req, res, next) => {
    next(new ErrorHandler(`Request Url Not Found ${req.url}`, 404));
});

app.use(generateErrors);

app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}`));
