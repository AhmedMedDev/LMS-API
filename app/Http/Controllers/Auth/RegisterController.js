const User = require("../../../Models/User");
const RegisterObserver = require("../../../Observers/RegisterObserver");
const AuthServiceProvider = require("../../../Providers/AuthServiceProvider");
const ResponseServiceProvider = require("../../../Providers/ResponseServiceProvider");


class RegisterController 
{
    /**
     * Register a new user
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async register (req, res) 
    {
        try {
            let user = await AuthServiceProvider.register(req.body);

            req.body.userID = user[0].insertId
            
            // Inject Observer 
            RegisterObserver.registered(req.body)

            return res.status(200).json({
                success : true,
                payload : "Check Your Email"
            })

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }
}

module.exports = new RegisterController