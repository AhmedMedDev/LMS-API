const User = require("../../../Models/User")

class RegisterController
{
    static register (req, res) 
    {
        User.register (req.body, (err, result) => {
            return res.status(200).json({
                success : true,
                payload : result
            })
        })
    }
}

module.exports = RegisterController