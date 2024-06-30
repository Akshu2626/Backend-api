const express = require('express');
const app = express();
require('dotenv').config();


//morgan 
const morgan = require('morgan');
const ErrorHandler = require('./utils/ErrorHandler');
const { generateErrors } = require('./middlewires/errors');
app.use(morgan('tiny'));

//Routes
app.use("/", require('./routes/IndexRoute'));

//Error Handling
app.all("*", (req, res, next) => {
    next(new ErrorHandler(`Request Url Not Found ${req.url}`, 404));
})

app.use(generateErrors)


app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}`));

