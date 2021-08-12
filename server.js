require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


/**
 * Middlewares
 */

const authenticateToken = require('./app/Http/Middleware/authenticateToken.js');

//


app.get('/', () => res.send('Hello World') );


/**
 * Auth Routes
 */

 app.use('/api/v1/auth',  require('./routes/api/auth.js'));

//

/**
 * Post Routes
 */

app.use('/api/v1/posts',  require('./routes/api/post.js'));


//









app.listen(port, () => console.log(`Express is running at port ${port}`));