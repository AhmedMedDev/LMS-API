require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static('public'))

/**
 * Middlewares
 */

const authenticateToken = require('./app/Http/Middleware/authenticateToken.js');

//


app.get('/', () => res.send('Hello World'));

// app.get('/', (req, res) => {
//     res.sendFile( path.join(__dirname, 'resources', 'views', 'welcome.html'));
// });



/**
 * Auth Routes
 */

 app.use('/api/v1/auth',  require('./routes/api/auth.js'));


/**
 * Post Routes
 */

app.use('/api/v1/posts',  require('./routes/api/post.js'));

/**
 * System Routes
 */

 app.use('/api/v1/systems',  require('./routes/api/system.js'));



app.listen(port, () => console.log(`Express is running at port ${port}`));