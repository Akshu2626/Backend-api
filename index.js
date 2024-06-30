const express = require('express');
const app = express();
require('dotenv').config();


//morgan 
const morgan=require('morgan');
app.use(morgan('tiny'));

//Routes
app.use("/", require('./routes/IndexRoute'));



app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}`));

