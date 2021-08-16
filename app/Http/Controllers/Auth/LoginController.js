const AuthServiceProvider = require("../../../Providers/AuthServiceProvider");
const jwtServiceProvider = require("../../../Providers/jWTServiceProvider");
const ResponseServiceProvider = require("../../../Providers/ResponseServiceProvider");

class LoginController
{
    static async login (req, res) 
    {
        let result = await AuthServiceProvider.attemp(req.body)

        if (!result.auth) return ResponseServiceProvider.unauthorized(res)
        
        let payload = {
            data: {
                user_id : result.user.id
            }
        }

        const accessToken = jwtServiceProvider.generateAccessToken(payload)

        return jwtServiceProvider.respondWithToken(accessToken,result.user,res)
    }
}

module.exports = LoginController