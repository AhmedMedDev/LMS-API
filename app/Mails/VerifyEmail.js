const Mailer = require("./Mail")
const ejs = require('ejs');
const path = require("path");

class VerifyEmail
{
    constructor (user) 
    {
        this.user = user
    }

    async send () 
    {
        const view = path.join('resources','mails','VerifyEmail.ejs');

        Mailer.build({
            to: this.user.email, 
            subject: "Verify Email ✔", 
            html: await ejs.renderFile(view, {user:this.user}), 
        })
    }
}
module.exports = VerifyEmail