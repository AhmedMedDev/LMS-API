require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');

const cors = require('cors')

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(fileUpload());

app.use(cors())

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.set('views', 'resources')


/**
 * Middlewares
 */

const authenticateToken = require('./app/Http/Middleware/authenticateToken.js');

//

app.get('/', (req, res) => res.send('Hello World'));

/**
 * Auth Routes
 */

app.use('/api/v1/auth',  require('./routes/api/auth.js'));

/**
 * System Routes
 */

app.use('/api/v1/systems',  require('./routes/api/system.js'));



// Return to handling style
 app.use('*', (req, res) => res.render('views/404'));


app.listen(port, () => console.log(`Express is running at port ${port}`));