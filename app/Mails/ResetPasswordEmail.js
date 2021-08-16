const Mailer = require("./Mail")
const ejs = require('ejs');
const path = require("path");


class ResetPasswordEmail
{
    constructor (data) 
    {
        this.user = data.user


        this.pincode = data.pincode
    }

    async send () 
    {
        const view = path.join('resources','mails','ResetPasswordEmail.ejs');

        const data = {user:this.user, pincode : this.pincode}

        Mailer.build({
            to: this.user.email, 
            subject: "Reset Password ✔", 
            html: await ejs.renderFile(view, data), 
        })

    }
}

module.exports = ResetPasswordEmail