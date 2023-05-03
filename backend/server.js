/**
 * connect to config.env file
 */
require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const errorHandler = require('./middleware/error');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({extended: true}));

/**
 * connect to database
 */
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const port = process.env.PORT || 4242;

//routes
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/private', require('./routes/private'));
app.use(errorHandler);


app.listen(port, () => { console.log(`Server is running on port ${port}`) });