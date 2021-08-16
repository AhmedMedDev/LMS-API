const ResetPasswordEmail = require("../Mails/ResetPasswordEmail");


class ResetPassObserver
{
    static index (data) 
    {
        let resetPasswordEmail =  new ResetPasswordEmail({user:data.user, pincode: data.pincode})

        resetPasswordEmail.send();
    }
}

module.exports = ResetPassObserver