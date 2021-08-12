const User = require("../../../Models/User");
const Controller = require("../Controller");

const AuthController = require("./AuthController");

class LoginController
{
    static login (req, res) 
    {
        User.attemp(req.body, (err, user) => 
        {
            if (!isNaN(user)) return res.status(401).json({
                success : false,
                payload : "Unauthorized"
            })

            let payload = {
                data: {
                    user_id : user[0].id
                }
            }

            const accessToken = AuthController.generateAccessToken(payload)

            return AuthController.respondWithToken(accessToken,user[0],res)
        })
    }
}

module.exports = LoginController