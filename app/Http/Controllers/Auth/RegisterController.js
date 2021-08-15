const User = require("../../../Models/User");

const Controller = require("../Controller");

const VerifyEmail = require("../../../Mails/VerifyEmail");

class RegisterController extends Controller
{
    static async register (req, res) 
    {
        try {
            let user = await User.register(req.body);

            let verifyEmail =  new VerifyEmail(req.body)

            verifyEmail.send();

            return res.status(200).json({
                success : true,
                payload : user[0]
            })

        } catch (error) {
            return Controller.queryError(res, error)
        }
    }
}

module.exports = RegisterController