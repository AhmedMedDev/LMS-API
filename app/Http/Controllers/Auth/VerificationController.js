const User = require("../../../Models/User")
const Controller = require("../Controller")

class VerificationController 
{
    static async emailVerification (req, res) 
    {
        try {

            let user = await User.findByVerificationCode(req.params.verification_code)

            if (!isNaN(user[0])) return Controller.notFoundResource(res)
            
            if (user[0][0].email_verified_at != null) {
                
                return res.status(200).json({
                    success : true,
                    payload : 'Your email has already been verified before'
                })
            }

            let activate = await User.activateEmailVerification(user[0][0].id)

            return res.status(200).json({
                success : true,
                payload : "Your account has been verified"
            })

        } catch (error) {
            return Controller.queryError(res, error)
        }
    }
}

module.exports = VerificationController