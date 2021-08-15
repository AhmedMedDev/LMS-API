const User = require("../../../Models/User");

const Controller = require("../Controller");

const RegisterObserver = require("../../../Observers/RegisterObserver");

class RegisterController extends Controller
{
    static async register (req, res) 
    {
        try {
            let user = await User.register(req.body);

            req.body.userID = user[0].insertId
            
            RegisterObserver.registered(req.body)

            return res.status(200).json({
                success : true,
                payload : "Check Your Email"
            })

        } catch (error) {
            return Controller.queryError(res, error)
        }
    }
}

module.exports = RegisterController