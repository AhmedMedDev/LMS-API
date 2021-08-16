const ResetPasswordEmail = require("../Mails/ResetPasswordEmail");
const ResetPassword = require("../Models/ResetPassword");


class ResetPassObserver
{
    static preResetPassword (data) 
    {
        let resetPasswordEmail =  new ResetPasswordEmail({user:data.user, pincode: data.pincode})

        resetPasswordEmail.send();
    }

    static resetPassword (data) 
    {
        ResetPassword.delete(data)
    }
}

module.exports = ResetPassObserver