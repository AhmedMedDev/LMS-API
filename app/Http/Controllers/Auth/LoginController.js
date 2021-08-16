const User = require("../../../Models/User");
const jwtServiceProvider = require("../../../Providers/jWTServiceProvider");

class LoginController
{
    static login (req, res) 
    {
        User.attemp(req.body, (err, user) => 
        {
            if (user == null) return res.status(401).json({
                success : false,
                payload : "Unauthorized"
            })

            let payload = {
                data: {
                    user_id : user[0].id
                }
            }

            const accessToken = jwtServiceProvider.generateAccessToken(payload)

            return jwtServiceProvider.respondWithToken(accessToken,user[0],res)
        })
    }
}

module.exports = LoginController