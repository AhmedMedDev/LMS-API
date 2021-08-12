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

 const AuthController = require('./app/Http/Controllers/Auth/AuthController.js');

 const LoginController = require('./app/Http/Controllers/Auth/LoginController.js');
 
 const RegisterController = require('./app/Http/Controllers/Auth/RegisterController.js');
 
 app.post('/login', LoginController.login)
 
 app.post('/register', RegisterController.register)
 
 app.get('/refresh', authenticateToken.handle, AuthController.refresh)

 app.get('/me', authenticateToken.handle, AuthController.me)

//

/**
 * Post Routes
 */

app.use('/api/v1/posts',  require('./routes/post.js'));





//









app.listen(port, () => console.log(`Express is running at port ${port}`));