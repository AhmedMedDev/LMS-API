const VerifyEmail = require("../Mails/VerifyEmail");


class RegisterObserver
{
    static registered (userInfo) 
    {
        let verifyEmail =  new VerifyEmail(userInfo)

        verifyEmail.send();
    }
}

module.exports = RegisterObserver